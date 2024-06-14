import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private readonly storage:Storage = inject(Storage)
  constructor() { }
}
