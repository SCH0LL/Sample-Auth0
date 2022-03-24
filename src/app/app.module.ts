import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imorted Auth0 Module from SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-4v8xa-a5.us.auth0.com',
      clientId: '0boewlqJD188RGGvHP1CbyYCpOsuciHq'
    }),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
