import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { Component, Input } from '@angular/core';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private RegisterService: RegisterService, private router: Router, private loginService: LoginService) {}
  @Input()
  username: string = '';
  @Input()
  password: string = '';  
  @Input()
  name: string = '';


  onSubmit(): void {
    if (this.username && this.password) {
      this.RegisterService.Register(this.username, this.password, this.name).subscribe(
        () => {
          this.loginService.login(this.username, this.password).subscribe(
            () => {
              this.router.navigate(['/home']);
            },
            (error) => {
              console.error('Erro ao efetuar login:', error);
            }
          );
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
