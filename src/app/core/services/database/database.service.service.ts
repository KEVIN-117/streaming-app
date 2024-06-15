import {inject, Injectable} from '@angular/core';
//import {Database} from "@angular/fire/database";
import {addDoc, collection, doc, Firestore, getDocs, query, where} from "@angular/fire/firestore";
import {UserDto} from "@/types";
import {User} from "@/stories/user";

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  private readonly dataBase: Firestore = inject(Firestore)

  private readonly collection$ = collection(this.dataBase, 'users');
  constructor() { }


  private document(path: string, id: string){
    return doc(this.dataBase, `${path}/${id}`)
  }

  async createUser(data: UserDto){
    return await addDoc(this.collection$, data)
  }


  async getUser(id: string){
    try {
      let user: UserDto = {} as UserDto

      const q = query(this.collection$, where('id', '==', id))

      const querySnapshot = await getDocs(q)


      querySnapshot.forEach((doc) =>{
        user = {...doc.data() as UserDto}
      })

      return user


    } catch (error) {
      console.error(error)
      return  {} as UserDto
    }
  }
}
