import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get user(): string | null {
    return localStorage.getItem('user');
  }

  click = false;

  clickHistory(): void {
    this.click = !this.click;
  }

  Logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  constructor(private router: Router) { }
}
