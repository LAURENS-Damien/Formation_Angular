import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {

    let motsDePassesIdentiques = true;
    // on récupère le mot de passe et le mot de passe de confirmation
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    // si le mot de passe et la confirmation sont différents
    if (password.value !== passwordConfirm.value) {
      motsDePassesIdentiques = false;
    }

    // on retourne null si le mot de passe et le mot de passe de confirmation sont identiques
    // sinon un dictionnaire d'erreur
    return motsDePassesIdentiques ? null : { 'passwordMatchError': { password, passwordConfirm } };
  };
}
