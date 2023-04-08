import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from '../notepad.service';
import { Notepad } from '../notepad';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers:[DatePipe]
})
export class NotesComponent {
  notelist:Notepad[]=[];
  day= new Date()
  search:string='';
  constructor(public router:Router,public NotepadService:NotepadService,public DatePipe:DatePipe,private notifier: NotifierService){
  
}
ngOnInit(){
  this.NotepadService.getnotes().subscribe((res:any)=>
  {
    if(res.status == 200)
    {
      this.notifier.notify('success', "List Loaded Succefully"); 
      this.notelist = res.response.notePads;
    }
    else
      this.notifier.notify('error', res.message);
  })
}
editNote(note:any)
{  
    this.NotepadService.ACTION$.next('edit')
    this.NotepadService.DATA$.next(note)
    // this.NotepadService.EDIT$.next(i)
    this.router.navigate(['/edit-note'])
}
  deleteNote(i:number)
  { 
    if(confirm("Are you Sure To Delete Item Id :" + i)){
      this.NotepadService.deleteNote(i).subscribe((res:any)=>
      {
        if(res.status == 200)
        {
          this.notifier.notify('success', "Deleted Succefully");  
          this.ngOnInit();
        }
        else
          this.notifier.notify('error', res.message);
      });
    }
    
  };
  shownote(note:any)
  {
    this.NotepadService.ACTION$.next('show');
    this.NotepadService.DATA$.next(note);
    this.router.navigate(['/edit-note']);
  }
  addNote(){
    this.NotepadService.ACTION$.next('add')
    this.NotepadService.DATA$.next({id:0,title:'',date:this.DatePipe.transform(new Date(),'MMM d, y'),describtion:''})
    this.router.navigate(['/edit-note'])
    }

    // searchfun(){
    //   if(this.search.length>0){
    //     this.notelist=this.notelist.filter(note=>{
    //       return note.title.toUpperCase().includes(this.search.toUpperCase())
    //     })
    //   }
    //   else{
    //     this.notelist=this.NotepadService.getnotes()
    //   }
    // }
}
