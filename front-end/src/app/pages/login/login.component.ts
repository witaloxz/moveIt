import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logiForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService 
  ){
    this.logiForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  submit(){
    this.loginService.login(this.logiForm.value.email, this.logiForm.value.password).subscribe({
      next: () => this.toastr.success('Login successful'),
      error: () => this.toastr.error('Login failed')
    })
    
  }

  navigate(){
    this.router.navigate(['/signup']);
  }

}
