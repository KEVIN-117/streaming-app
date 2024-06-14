import {inject, Injectable} from '@angular/core';
import {Database} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  private readonly dataBase: Database = inject(Database)
  constructor() { }
}
