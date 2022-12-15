import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'main-page', component:MainPageComponent},
  {path: 'user-profile', component:UserProfileComponent},
  {path: 'get-appointment', component:GetAppointmentComponent},
  {path: 'my-appointment', component:MyAppointmentComponent},
  {path:'logout', component:LogoutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
