import {Component, inject} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {Router, RouterLink} from "@angular/router";
import {ContainerComponent} from "../components/container/container.component";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"
import {AuthServiceService} from "../../../../../../angular-streaming/src/app/core/services/auth/auth.service.service";
import {Credentials, UserDto} from "../../../../../../angular-streaming/src/types";
import Swal from "sweetalert2";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    ButtonsComponent,
    RouterLink,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  private readonly auth = inject(AuthServiceService)
  private readonly router = inject(Router)

  protected formControl;
  showPassword: boolean = false;
  constructor() {
    this.formControl = new FormGroup({
      email: new FormControl('cademi4911@jadsys.com', [
        Validators.required,
        Validators.email
      ]),
      role: new FormControl<"Admin" | "Client">('Client', [
        Validators.required,
        Validators.pattern(/Admin|Client/)
      ]),
      password: new FormControl('n8pnU9xrVAjJz*', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  async onSubmit() {
    if (!this.formControl.valid) return
    try {
      const data = this.formControl.value
      const formatData = {
        email: data.email,
        role: data.role,
        password: data.password
      } as Credentials
      const {user} = await this.auth.login(formatData)
      if (user) {
        await Swal.fire({
          icon: 'success',
          title: `
            <div>
                <h2 class="text-2xl font-bold text-blue-900">Inicio de sesión exitoso</h2>
                <p class="text-sky-600">
                  Bienvenido ${user.email} a tu panel de control
                </p>
            </div>
          `,
          showConfirmButton: false,
          timer: 2000,
          background: '#1a202c',
        })
        this.formControl.reset()
        await this.router.navigateByUrl('/dashboard')
      }
    }catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      }
    }
  }
}
