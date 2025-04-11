import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { VirtReceptionService } from 'src/app/services/virt-reception.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-virt-reception',
  templateUrl: './virt-reception.component.html',
  styleUrls: ['./virt-reception.component.sass'],
})
export class VirtReceptionComponent implements OnInit {

    datePipe: DatePipe = new DatePipe('en-US');
    
    gfg: Message[]=[];
    //enableMessage=false;

    userForm = this.fb.group({
      date: [this.getCurrentFormattedDate(), Validators.required],
      name: ['', [Validators.required, Validators.minLength(10)]], 
      adress: ['', [Validators.required, Validators.minLength(10)]], 
      email: ['', [Validators.required, Validators.email]], 
      text: ['', [Validators.required, Validators.minLength(10)]]       
    });
  
    submitted = false;

    constructor(private fb: FormBuilder, private VirtReceptionService : VirtReceptionService,private router: Router) { };
  
    ngOnInit(): void {
    }
  
    onSubmit() {

      this.submitted = true;
      if (this.userForm.invalid) {
        return;
      }
      console.log(this.userForm.value);
      let s = this.VirtReceptionService.add(this.userForm.value).subscribe(data => {                       
        console.log(data);
        if (data.ok){
          this.gfg=[{severity:'info',summary:'Повідомлення: ',detail:'На Вашу пошту відправлено лист з посиланням для підтвердження електронного звернення'}];     
        //  this.onReset();
        }
        s.unsubscribe();         
      }); 
    }

    showResponse(response:any){

    }

    get f(): { [key: string]: AbstractControl } {
      return this.userForm.controls;
    }

    getCurrentFormattedDate(){
    
      var date = new Date();
      var transformDate = this.datePipe.transform(date, 'dd-MM-yyyy');
      return transformDate;
  
    }

    onReset(): void {
      this.submitted = false;
      this.userForm.reset();
    }
}
