import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  noteId: string = "";
  note: any = { description: '' };

  constructor(public route: ActivatedRoute, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];

    this.firebaseService.getNoteById(this.noteId).subscribe((snapshot) => {
      if (snapshot.exists()) {
        this.note = snapshot.data(); // Mengisi deskripsi sesuai data yang dipilih
      } else {
        console.log(`Note dengan ID ${this.noteId} tidak ditemukan.`);
        // Opsi tambahan: Anda dapat mengarahkan atau menampilkan pesan kesalahan di sini
      }
    });
  }

  onSubmit() {
    this.firebaseService.updateNote(this.noteId, { description: this.note.description }).then(() => {
      console.log('Catatan berhasil diperbarui.');
      // Opsional: Anda dapat mengarahkan atau menampilkan pesan sukses di sini
    });
  }
}
