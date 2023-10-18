import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  showForm = false;
  newNote = { description: '' };

  constructor(private firebaseService: FirebaseService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.firebaseService.addNote(this.newNote).then(() => {
      console.log('Note added successfully.');
      this.newNote = { description: '' }; // Clear form
    });
  }
}
