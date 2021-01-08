import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent {

  constructor() { }

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
