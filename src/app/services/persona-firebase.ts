import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaFirebase {
  firestore = inject(Firestore);

  getPersonas() {
    const personasCollection = collection(this.firestore, 'personas');
    return collectionData(personasCollection, { idField: 'id' }) as Observable<{ id: string; name: string; email: string }[]>;
  }

  createPersona(persona: { name: string; email: string }) {
    const personasCollection = collection(this.firestore, 'personas');
    return addDoc(personasCollection, persona);
  }

  updatePersona(id: string, persona: { name: string; email: string }) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, id);
    return updateDoc(personaDoc, persona);
  }

  deletePersona(id: string) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, id);
    return deleteDoc(personaDoc);
  }
}
