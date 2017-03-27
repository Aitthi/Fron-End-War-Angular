import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { GitService } from './services/git.service';
import { StargazersComponent } from './stargazers/stargazers.component';

const Routers:Routes = [

  { path:'', component:HomeComponent },
  { path:'stargazers/:ac', component:StargazersComponent }

  ] 

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    HomeComponent,
    StargazersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,      
    RouterModule.forRoot(Routers)
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
