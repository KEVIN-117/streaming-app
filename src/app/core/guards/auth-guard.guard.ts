import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "@app/core/services/auth/auth.service.service";
import {map} from "rxjs";
import { log } from 'console';
import { DatabaseServiceService } from '../services/database/database.service.service';
import { UserDto } from '@/types';

const authServiceEstate = () => inject(AuthServiceService).authState
const routerService = ()=> inject(Router)
const dbService = ()=> inject(DatabaseServiceService)

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authState = authServiceEstate()
  const router = routerService()
  const db = dbService()
  return authState.pipe(
    map(user => {
      const userEmail = user?.email
      let userDb = {} as UserDto
      /*if (userEmail){
        db.findUserByEmail(userEmail).then((res: UserDto) => {
          console.log(res);
          userDb = {
            email: res.email,
            name: res.name,
            lastName: res.lastName,
            role: res.role,
            password: res.password
          }
          return userDb
        }).then((res) => {
          userDb = res})
      }
      console.log(userDb);*/

      if (!user){
        router.navigateByUrl("/auth/log-in").then()
        return false
      }
      /*if (userDb.role === "Admin")
        return true*/
      return true
    })
  );
};

export const publicGuard: CanActivateFn = (route, state)=>{
  const authState = authServiceEstate()
  const router = routerService()
  return authState.pipe(
    map(user =>{
      if (user){
        router.navigateByUrl("/dashboard").then()
        return false
      }
      return true
    })
  );
}
