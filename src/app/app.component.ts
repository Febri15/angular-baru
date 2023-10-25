import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service'; // Example path, adjust as needed
import { Router } from '@angular/router';

interface Note {
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public notesCollection: AngularFirestoreCollection<Note>;
  notes$: Observable<Note[]>;

  constructor(
    public firestore: AngularFirestore, 
    public firebaseService: FirebaseService,
    private router: Router
    ) {
    this.notesCollection = this.firestore.collection<Note>('notes');
    this.notes$ = this.notesCollection.valueChanges();
  }

  addItem(Note: Note) {
    this.firebaseService.addNote(Note).then(ref => {
      console.log('Added Note with ID: ', ref.id);
    });
  }

  getNotes() {
    this.firebaseService.getNotes().subscribe(Notes => {
      console.log('Notes: ', Notes);
    });
  }

  updateNotes(id: string, newData: Partial<Note>) {
    this.firebaseService.updateNote(id, newData).then(() => {
      console.log('Note updated successfully.');
    });
  }

  deleteNotes(id: string) {
    this.firebaseService.deleteNote(id).then(() => {
      console.log('Note deleted successfully.');
    });
  }
}
