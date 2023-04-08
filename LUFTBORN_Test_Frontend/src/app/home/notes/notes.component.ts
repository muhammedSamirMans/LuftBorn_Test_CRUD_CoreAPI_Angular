import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from '../notepad.service';
import { Notepad } from '../notepad';

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
  constructor(public router:Router,public NotepadService:NotepadService,public DatePipe:DatePipe){
  
}
ngOnInit(){
  this.NotepadService.getnotes().subscribe((res:any)=>
  {
    this.notelist=res;
  })
}
editNote(note:any){  
  this.NotepadService.ACTION$.next('edit')
  this.NotepadService.DATA$.next(note)
  // this.NotepadService.EDIT$.next(i)
  this.router.navigate(['/edit-note'])
  }
  deleteNote(i:number){
    debugger;
   this.NotepadService.deleteNote(i).subscribe(res=>{
   this.ngOnInit()
   })
  }
  shownote(note:any){
  this.NotepadService.ACTION$.next('show')
  this.NotepadService.DATA$.next(note)
  this.router.navigate(['/edit-note'])
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
