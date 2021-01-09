import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(
    private fb: FormBuilder,
  ) { }

  notRobot: boolean;

  registrationForm = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.pattern("\\d{0,12}")]],
    articleName: [null, [Validators.required]],
    organization: [null, [Validators.required]],
    coAuthors: [null, [Validators.required]],
    description: [null, [Validators.required]],
  });

  registration() {

    console.log(this.registrationForm.value)
  }

  resolved(e) {

    console.log(e);
    this.notRobot = true;
  }
}
