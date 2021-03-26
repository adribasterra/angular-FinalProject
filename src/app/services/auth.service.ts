import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  signup(user : User){
    this.storageService.saveUser(user);
  }

  login(email : string, password : string){
    let success : boolean = false;
    if(email && password){
      let users : User[] = this.storageService.getUsers();
      if(users){
        users.forEach(user => {
          if(email === user.email && password === user.password){
            this.storageService.saveSession(email);
            success = true;
            return; // Exit the foreach loop, not the entire function
          }
        });
      }
    }
    return success;
  }

  logout(){
    this.storageService.removeSession();
  }

  isAuthenticated(): boolean {
    return this.storageService.isAuthenticated();
  }
}
