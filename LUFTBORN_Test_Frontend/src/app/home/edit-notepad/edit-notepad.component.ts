import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotepadService } from '../notepad.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-notepad',
  templateUrl: './edit-notepad.component.html',
  styleUrls: ['./edit-notepad.component.scss']
})
export class EditNotepadComponent {
  action:string='';
  constructor(public fb:FormBuilder,public NotepadService:NotepadService,public router:Router,private notifier: NotifierService){
    this.NotepadService.DATA$.subscribe(data=>this.noteForm.setValue(data))
    this.NotepadService.ACTION$.subscribe(data=>this.action=data)
  }
  noteForm=this.fb.group({
    id:[0],
    title:['',Validators.required],
    date:['',Validators.required],
    describtion:['',Validators.required]
  })

   get noteFormControls(){
   return this.noteForm.controls
   }
  submit(){    
    if(this.action=='add'){
     this.NotepadService.addnotes(this.noteForm.value).subscribe((res:any)=>{
      if(res.status == 200)
      { 
        this.notifier.notify('success', "Added Succefully");
        this.router.navigate(['/notes']);
      }
      else
        this.notifier.notify('error', res.message);
     });
    }
    if(this.action=='edit'){
      let index:number=0
      this.NotepadService.EDIT$.subscribe((data:number)=>index=data)
      this.NotepadService.editnotes(this.noteForm.value).subscribe((res:any)=>{
        if(res.status == 200)
        {
          this.notifier.notify('success', "Edit Succefully"); 
          this.router.navigate(['/notes']);
        }
        else
          this.notifier.notify('error', res.message);
       });
    }

  }
  cancel(){
    this.router.navigate(['/notes'])
  }
}
