import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { strongPasswordValidator} from './strong-password.validator';
import { passwordMatchValidator } from './password-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(
     private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // On initialise notre formulaire piloté par le modèle
    // Méthode basique (commentée car utilisation de la méthode optimisée ci dessous)
//    this.form = new FormGroup({
//      'name': new FormGroup({
//        first: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
//        last: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
//      }),
//      email: new FormControl('', Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$'))
//    });

    // Méthode optimisée
    this.form = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])],
        last: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])]
      }),
      email: ['', Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')],
      login: ['', Validators.required],
      verification: this.fb.group({
        // on applique notre validateur de la même manière qu'un validateur 'classique'
        password: ['', Validators.compose([Validators.required, strongPasswordValidator()])],
        // on applique notre validateur de la même manière qu'un validateur 'classique'
        passwordConfirm: ['', Validators.compose([Validators.required, strongPasswordValidator()])]
      }, { validator: passwordMatchValidator() })
    });

    // on déclare une variable 'person', avec la même structure que le formulaire.
    const person = {
      name: {
        first: 'Damien',
        last: 'LAURENS'
      },
      email: 'damienlaurens64@gmail.com',
      login: '',
      verification: {
        password: '',
        passwordConfirm: ''
      }
    };

    // On pré-remplis le formulaire avec la variable 'person' !
    // Les champs seront initialisés avec la valeur de la propriété correspondante.
    this.form.setValue(person);
  }
}
