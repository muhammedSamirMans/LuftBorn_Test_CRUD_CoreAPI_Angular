import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotepadService } from './notepad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(public router:Router){
}

getStart(){
  this.router.navigate(['/notes'])
}
}
