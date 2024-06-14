import {RouterLink} from "@angular/router";
import {Component, Input} from '@angular/core';
//import {AuthService} from "../../../../core/services/auth.service";
import {GithubAuthProvider} from "@angular/fire/auth";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  //private _authService: AuthService = inject(AuthService)


  @Input() isLogin:boolean = false;

  async action(provider: string){
    if (provider === 'google'){
      await this.loginWhitGoogle()
    } else if (provider === 'github'){
      await this.loginWhitGithub()
    }
  }

  async loginWhitGoogle(){
    try {
      /*const  res = await this._authService.googleAuth()
      await this._router.navigateByUrl('/dashboard')

      console.log(res.user)
      console.log(typeof res)*/
    }catch (e){
      console.error(e)
    }
  }

  async loginWhitGithub(){
    try {
      /*const  res = await this._authService.githubAuth()
      await this._router.navigateByUrl('/dashboard')
      console.log(res.user)
      console.log(typeof res)*/
    }catch (e){
      console.error(e)
    }
  }
}
