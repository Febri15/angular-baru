import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Note {
  description: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'angular-baru';

  note$: Observable<Note[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    let noteCollection = collection(this.firestore, 'notes');
    console.log(noteCollection);
    this.note$ = collectionData(noteCollection) as Observable<Note[]>;
  }
}
