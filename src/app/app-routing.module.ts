import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Add this line
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ReadNotesComponent } from './read-notes/read-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  { path: 'update-note/:id', component: UpdateNoteComponent },
  { path: 'read-notes', component: ReadNotesComponent },
  { path: 'create-note', component: CreateNoteComponent },
  { path: '', redirectTo: '/read-notes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }