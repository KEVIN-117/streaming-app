import {inject, Injectable} from '@angular/core';
import {Auth, authState} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly auth: Auth = inject(Auth)
  private readonly authState = authState(this.auth)
  constructor() { }

}
