import {Component, inject} from '@angular/core';
import {DatabaseServiceService} from "@app/core/services/database/database.service.service";
import {AuthServiceService} from "@app/core/services/auth/auth.service.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
})
export class MainComponent {
  private readonly authState = inject(AuthServiceService).authState
  private readonly db = inject(DatabaseServiceService)


  ngOnInit() {
    this.authState.subscribe(user =>{
      if (user) {
        /*const email = user.email as string
        this.db.getUserByEmail(email).then(user => {
          console.log(user)
        })*/
      }
    })
  }

}
