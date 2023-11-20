import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telefon: FormControl = new FormControl('', Validators.required);
  missatge: FormControl = new FormControl('', Validators.required);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', [Validators.required, Validators.minLength(9)]],
      missatge: ['', [Validators.required, Validators.minLength(20)]],
    })
  }

  sendValues() {
    alert(`
    DADES FORMULARI:
    Nom: ${this.form.value.nom}
    Email: ${this.form.value.email}
    Telèfon: ${this.form.value.telefon}
    Missatge: ${this.form.value.missatge}
    `);
    this.form.reset();
  }
}
