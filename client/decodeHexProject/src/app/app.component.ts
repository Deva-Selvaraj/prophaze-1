import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { BookServiceService } from './book-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  createBookForm!: FormGroup;

  
  constructor(private fb: FormBuilder,private bookService:BookServiceService) {}

  ngOnInit():void{
    this.createBookForm=this.fb.group({
      Payload :new FormControl('',[Validators.required]),
      data4 :new FormControl('',[Validators.required])

    });
  }

  get titleData():FormGroup{
    return this.createBookForm?.get('Payload') as FormGroup;
  }

  get data():FormGroup{
    return this.createBookForm?.get('data4') as FormGroup;
  }

  onSubmit(){
    console.log(this.createBookForm.value);
    this.bookService.createBook(this.createBookForm.value).subscribe((res)=>{
      console.log(res);
      this.createBookForm.patchValue({data4:res.data4})
      console.log(this.createBookForm.value);
    })
    
  }
}
