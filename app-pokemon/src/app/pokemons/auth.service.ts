import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

  // Une méthode de connexion
  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }
}
