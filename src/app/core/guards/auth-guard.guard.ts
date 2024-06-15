import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "@app/core/services/auth/auth.service.service";
import {map} from "rxjs";

const authServiceEstate = () => inject(AuthServiceService).authState
const routerService = ()=> inject(Router)

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authState = authServiceEstate()
  const router = routerService()
  return authState.pipe(
    map(user => {
      if (!user){
        router.navigateByUrl("/auth/log-in").then()
        return false
      }
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
