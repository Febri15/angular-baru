import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ReadNotesComponent } from './read-notes/read-notes.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ReadNotesComponent,
    UpdateNoteComponent,
    DeleteNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AngularFireAuth,
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
