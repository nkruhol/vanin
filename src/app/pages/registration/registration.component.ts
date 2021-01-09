import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { CreateParticipantAction } from "src/app/storage/registration/registration.actions";
import { selectState } from "src/app/storage/registration/registration.selectors";
import { State } from "src/app/storage/registration/registration.state";
import { IStore } from "src/app/storage/store";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  state$ = this.store.select(selectState);

  constructor(
    private fb: FormBuilder,
    private store: Store<IStore>,
  ) { }

  State = State;

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

    const form ={
      articleName: "Повышение энергоэффективности в системах собственных нужд тепловых электрических станций",
      coAuthors: "Ванин В.А., Лазуренко А.П., Кругол Н.М.",
      description: "повышение энергоэффективности в системах собственных нужд тепловых электрических станций",
      email: "kruhgol@gmail.com",
      firstName: "Николай",
      lastName: "Кругол",
      organization: "НТУ ХПИ",
      phone: "0955220835",
    };

    this.store.dispatch(CreateParticipantAction({ form }));
  }

  resolved(e) {

    console.log(e);
    this.notRobot = true;
  }
}
