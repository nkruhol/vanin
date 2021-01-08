import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { StoreModule } from "@ngrx/store";
import { ReducerConfiguration, ReducerMap } from "./storage/reducer-configuration";
import { EffectsModule } from "@ngrx/effects";
import { EffectsConfiguration } from "./storage/effects-configuration";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { CustomRouterSerializer } from "./storage/router/router.reducers";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(ReducerMap, ReducerConfiguration),
    EffectsModule.forRoot(EffectsConfiguration),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: true,
    }),
    StoreRouterConnectingModule.forRoot({
        serializer: CustomRouterSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
