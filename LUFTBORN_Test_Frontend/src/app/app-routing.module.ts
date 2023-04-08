import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNotepadComponent } from './home/edit-notepad/edit-notepad.component';
import { NotesComponent } from './home/notes/notes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'notes',
    component:NotesComponent
  },
  {
    path:'edit-note',
    component:EditNotepadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
