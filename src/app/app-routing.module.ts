import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from "./pages/add-article/add-article.component";
import { HomeComponent } from "./pages/home/home.component";
import { ParticipantListComponent } from "./pages/participant-list/participant-list.component";
import { RegistrationComponent } from "./pages/registration/registration.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "add-article",
    component: AddArticleComponent,
  },
  {
    path: "participants",
    component: ParticipantListComponent,
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
