import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { matchValidator } from './formValidator';
@Component({
  selector: 'app-registrosesion',
  templateUrl: './registrosesion.page.html',
  styleUrls: ['./registrosesion.page.scss'],
})

export class RegistrosesionPage implements OnInit {
  myForm!: FormGroup;
  constructor(
    
    private fb: FormBuilder
    
    ) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(8), matchValidator('passwordConfirm', true), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g)]],
      passwordConfirm:['', [Validators.required,  Validators.minLength(5), Validators.maxLength(8), matchValidator('password')]]
    })
  }
 

  //Create required field validator for name
  

  ngOnInit() {
  }

  saveData(){
    console.log(this.myForm.value);
  }

}
