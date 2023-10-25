import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Add this line
import { FirebaseService } from '../firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-read-notes',
  templateUrl: './read-notes.component.html',
  styleUrls: ['./read-notes.component.css']
})
export class ReadNotesComponent implements OnInit {
  notes: any[] = [];
  buttonClicked: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router, // Add this line
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // console.log("Test");
    this.getNotes();
  }

  private getNotes() {
    this.firebaseService.getNotes().subscribe(notes => {
      this.notes = notes.docs;
    });
  }

  refreshNotes() {
    this.getNotes(); // Reload the notes data
  }

  redirectToUpdate(noteId: string) {
    this.router.navigate(['/update-note', noteId]);
  }

  redirectToCreateNote() {
    this.router.navigate(['/create-note']);
    this.buttonClicked = true;
  }

  onDelete(noteId: string) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.firebaseService.deleteNote(noteId).then(() => {
          console.log('Note deleted successfully.');
          this.router.navigate(['/read-notes']);
          this.refreshNotes();
        }).catch(error => {
          console.error('Error deleting note:', error);
        });
      }
    });
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
