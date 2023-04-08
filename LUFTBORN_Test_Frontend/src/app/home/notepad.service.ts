import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notepad } from './notepad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  DATA$=new BehaviorSubject<Notepad>({id:0,title:"",date:'',describtion:""});
  ACTION$=new BehaviorSubject<string>("");
  EDIT$=new BehaviorSubject<number>(0);
  constructor(public http: HttpClient) { }

  getnotes(){
   return this.http.get(environment.apiURL+"/api/NotePad/GetAll");
  }

  addnotes(data:any){
    return this.http.post(environment.apiURL+"/api/NotePad/Create", data);
  }
  editnotes(data:any){
    return this.http.post(environment.apiURL+"/api/NotePad/Update", data);
  }
  deleteNote(i:number){
    return this.http.post(environment.apiURL+"/api/NotePad/Remove", i);
  }
}
