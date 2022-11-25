import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'main-page', component:MainPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
