import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private LoginService: LoginService, private router: Router) {}
  @Input()
  username: string = '';
  @Input()
  password: string = '';  
  @Input()
  name: string = '';


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
