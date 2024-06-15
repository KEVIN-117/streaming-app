import {Component, inject} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {ContainerComponent} from "../components/container/container.component";
import {Router, RouterLink} from "@angular/router";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormDto, UserDto} from "@/types";
import {AuthServiceService} from "@app/core/services/auth/auth.service.service";




@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonsComponent,
    ContainerComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  //private readonly auth = inject(AuthServiceService)
  //private readonly router: Router = inject(Router)

  protected form: FormGroup<FormDto>;

  showPassword: boolean = false;
  isAuthenticated: boolean = false;
  constructor() {
    this.form = new FormGroup<FormDto>({
      name: new FormControl('alguien test', [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: new FormControl('lasts test', [
        Validators.required,
        Validators.minLength(4)
      ]),
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
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])
    })
  }

  async submit(){
    /*
    aPgyc#P7@N2Lh5 -> cademi4911@jadsys.com
    n8pnU9xrVAjJz*
    T#uqP#tA7AA&Mf
     */
    if (!this.form.valid) return
    try {


    }catch (e){
      if (e instanceof Error) {
        alert(`Error if ${e.message}`)
        console.error(e.message)
      }else {
        alert(`Error else ${e}`)
      }
    }
  }
}

