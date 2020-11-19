import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextValidate } from 'src/app/Validations/CustomValidators.validatation';

@Component({
  selector: 'loginreactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {

form =new FormGroup(
  {
    email : new FormControl('',[Validators.required,TextValidate.nospaceAllowed],TextValidate.shoudBeUniq),
    password: new FormControl('')
  }
)

public get email() {
  return this.form.get('email');
}
touched(email)
{
  console.log(email);
}
submit(f)
{
  console.log(f);
}

}
