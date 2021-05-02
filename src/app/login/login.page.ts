import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthentificateService } from '../core/services/authentificate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es requerido.' },
      { type: 'pattern', message: 'Email no válido.' },
    ],
    password: [
      { type: 'required', message: 'El password es requerido.' },
      { type: 'minlength', message: 'Debe tener mínimo 5 caracteres.' },
    ],
  };

  //declaracion de variables
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificateService,
    private navCtrl : NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  ngOnInit() {}
  // version quemando datos
  loginUser(credentials) {
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = '';
      this.navCtrl.navigateForward('/home');
    }).catch(err =>{
      this.errorMessage = err;
    });

      //version consumiendo api
   /* this.authService.loginUser(credentials).subscribe(res => {
      this.errorMessage = '';
      if(res.toString() === 'No hay usuario registrado' ){
        this.errorMessage = "Check email or password";
      }else{
        this.navCtrl.navigateForward('/home');
      }
    }), err =>{
      this.errorMessage = err;
    }*/
  }
}
