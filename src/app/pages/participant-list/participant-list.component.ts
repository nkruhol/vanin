import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { InitParticipantsListAction } from "src/app/storage/particaipants/participants.actions";
import { selectParticipants, selectState } from "src/app/storage/particaipants/participants.selectors";
import { State } from "src/app/storage/particaipants/participants.state";
import { IStore } from "src/app/storage/store";

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  participants$ = this.store.select(selectParticipants);
  state$ = this.store.select(selectState);

  constructor(
    private store: Store<IStore>,
  ) { }

  State = State;
  ngOnInit() {

    this.store.dispatch(InitParticipantsListAction());
  }

  rows =[
    {
      firstName: "Виктор",
      lastName: "Ванин",
      email: "vanin@gmail.com",
      articleName: "Математические модели гидравлических трактов",
      organization: "НТУ ХПИ",
      coAuthors: "Ванин В.А., Кругол Н.М.",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore dolorem nostrum veniam quas soluta quia ratione
        eum deleniti enim, tempora ex hic iusto assumenda quam
        omnis quae. Reiciendis, voluptatem magni!
      `,
    },
    {
      firstName: "Виктор",
      lastName: "Ванин",
      email: "vanin@gmail.com",
      articleName: "Математические модели гидравлических трактов",
      organization: "НТУ ХПИ",
      coAuthors: "Ванин В.А., Кругол Н.М.",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore dolorem nostrum veniam quas soluta quia ratione
        eum deleniti enim, tempora ex hic iusto assumenda quam
        omnis quae. Reiciendis, voluptatem magni!
      `,
    },
    {
      firstName: "Виктор",
      lastName: "Ванин",
      email: "vanin@gmail.com",
      articleName: "Математические модели гидравлических трактов",
      organization: "НТУ ХПИ",
      coAuthors: "Ванин В.А., Кругол Н.М.",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore dolorem nostrum veniam quas soluta quia ratione
        eum deleniti enim, tempora ex hic iusto assumenda quam
        omnis quae. Reiciendis, voluptatem magni!
      `,
    },
  ]
}
