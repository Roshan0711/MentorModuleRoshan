import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectoryComponent } from './directory/directory.component';
import { DatePipe } from '@angular/common';
import { EmployeeDataService } from './employee-data.service';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    DirectoryComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'add', component: AddComponent},
      {path: 'directory', component: DirectoryComponent}
    ]),
    FormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
