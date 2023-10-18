import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Add this line
import { FirebaseService } from '../firebase.service';
import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-read-notes',
  templateUrl: './read-notes.component.html',
  styleUrls: ['./read-notes.component.css']
})
export class ReadNotesComponent implements OnInit {
  notes: any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router // Add this line
  ) {}

  ngOnInit() {
    // console.log("Test");
    this.firebaseService.getNotes().subscribe(notes => {
      this.notes = notes.docs;
    });
  }

  redirectToUpdate(noteId: string) {
    this.router.navigate(['/update-note', noteId]);
  }

  // Function to navigate to update-note component
  // navigateToUpdate(id: string) {
  //   // console.log(id);
  //   this.router.navigate(['/update-note', id]);
  // }

  // navigateToDelete(id: string) {
  //   this.router.navigate(['/delete-note', id]);
  // }

}
