import { LoginService } from 'src/services/login.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private LoginService: LoginService, private router: Router) {}
  @Input()
  username: string = '';
  @Input()
  password: string = '';

  onSubmit(): void {
    if (this.username && this.password) {
      this.LoginService.login(this.username, this.password).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Erro ao efetuar login:', error);
        }
      );
    } else {
      console.error('Por favor, forneça e-mail e senha.');
    }
  }
}
