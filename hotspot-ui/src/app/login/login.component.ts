import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;

  email: string;

  password: string;

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.api.login(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/spots');
      })
      .catch(e => alert("An error occurred: " + e.toString() + e._body))
      .then(() => this.loading = false);
  }

}
