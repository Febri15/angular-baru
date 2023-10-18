import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Add this line
import { UpdateNoteComponent } from './update-note/update-note.component';

const routes: Routes = [
  { path: 'update-note/:id', component: UpdateNoteComponent } // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }