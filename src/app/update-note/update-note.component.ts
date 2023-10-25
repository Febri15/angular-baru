import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  noteId: string = "";
  note: any = { description: '' };

  constructor(public route: ActivatedRoute, public firebaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
  
    this.firebaseService.getNoteById(this.noteId).subscribe((snapshot) => {
      if (snapshot) {
        this.note = snapshot; // Assuming snapshot is a plain JavaScript object
      } else {
        console.log(`Note dengan ID ${this.noteId} tidak ditemukan.`);
        // Opsi tambahan: Anda dapat mengarahkan atau menampilkan pesan kesalahan di sini
      }
    });
  }   

  onSubmit() {
    this.firebaseService.updateNote(this.noteId, { description: this.note.description }).then(() => {
      console.log('Catatan berhasil diperbarui.');
      this.router.navigate(['/read-notes']);
      // Opsional: Anda dapat mengarahkan atau menampilkan pesan sukses di sini
    });
  }

  redirectToCreate() {
    this.router.navigate(['/create-note']);
  }
}
