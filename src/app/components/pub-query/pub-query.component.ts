import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {CaptchaModule} from 'primeng/captcha';

interface IQType {
  name: string,
  _val: number
}

@Component({
  selector: 'app-pub-query',
  templateUrl: './pub-query.component.html',
  styleUrls: ['./pub-query.component.sass']
})
export class PubQueryComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', Validators.required], 
    lastName: [''],
    address: this.fb.group({ // <- another group of element
      street: [''],
      postCode: ['', Validators.required]
    }),
    typ_query:[],
    q_phone: ['', Validators.required], 
    q_email: ['', Validators.required], 
    q_document: ['', Validators.required], 
    q_text: ['', Validators.required] 
  });
  
  QTypes: IQType[];

  selectedQType: IQType;

  constructor(private fb: FormBuilder) {
      this.QTypes = [ 
        { name: "Фізична особа", _val: 1 }, 
        { name: "Юридична особа", _val: 2 },
        { name: "Об’єднання громадян без статусу юридичної особи", _val: 3 } 
      ]; 
      this.selectedQType=this.QTypes[0];
   };


  ngOnInit(): void {
  }

  addUser() {
    console.log(this.userForm.value);
  }

  showResponse(response:any){

  }

  onChange(event:any) : void {
    console.log(event);
    this.selectedQType=event.value;
  }
}
