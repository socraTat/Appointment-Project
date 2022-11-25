import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public authServ : AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authServ.signOut().subscribe(() => {
      this.route.navigate(['/'])
    })
  }

}
