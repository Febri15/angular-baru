import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QuerySnapshot  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs'; 

interface Note {
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public notesCollection: AngularFirestoreCollection<Note>;
  notes$: Observable<Note[]>;

  constructor(public afs: AngularFirestore) {
    this.notesCollection = this.afs.collection<Note>('notes');
    this.notes$ = this.notesCollection.valueChanges();
  }

  // Create Operation
  addNote(note: Note): Promise<DocumentReference<Note>> {
    return this.notesCollection.add(note);
  }
  
  // Read Operation
  getNotes(): Observable<QuerySnapshot<Note>> {
    return this.notesCollection.get();
  }

  // Update Operation
  updateNote(id: string, newData: Partial<Note>): Promise<void> {
    return this.notesCollection.doc(id).update(newData);
  }

  // Delete Operation
  deleteNote(id: string): Promise<void> {
    return this.notesCollection.doc(id).delete();
  }

  getNoteById(id: string): Observable<any> {
    const noteDoc = this.afs.collection('notes').doc(id);
    console.log('Note Doc:', noteDoc);
    return noteDoc.valueChanges();
  }  
}
