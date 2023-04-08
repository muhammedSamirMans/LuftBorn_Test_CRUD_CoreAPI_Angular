import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notepad } from './notepad';
@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  DATA$=new BehaviorSubject<Notepad>({id:0,title:"",date:'',describtion:""})
  ACTION$=new BehaviorSubject<string>("")
  EDIT$=new BehaviorSubject<number>(0)
  // notelist:{title:string,date:any,des:string}[]=[
  //   {
  //     title:"My First ToDo list",
  //     date:'2023-03-28',
  //     des:"this my note"
  //   },
  //   {
  //     title:"Ux Design Fundamental",
  //     date:'2023-03-28',
  //     des:"Ux Design Fundamental"
  //   },
  //   {
  //     title:"Important Design Priniciple",
  //     date:'2023-03-28',
  //     des:"Important Design Priniciple"
  //   },
  //   {
  //     title:"Important FrontEnd Priniciple",
  //     date:'2023-03-28',
  //     des:"as"
  //   }
  // ]
  constructor(public http: HttpClient) { }

  getnotes(){
   return this.http.get("https://localhost:7292/api/NotePad/GetAll");
  }

  addnotes(data:any){
    return this.http.post("https://localhost:7292/api/NotePad/Create", data);
  }
  editnotes(data:any){
    return this.http.post("https://localhost:7292/api/NotePad/Update", data);
  }
  deleteNote(i:number){
    return this.http.post("https://localhost:7292/api/NotePad/Remove", i);
  }
}
