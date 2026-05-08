import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  displayForm = signal<boolean>(false);
  number =signal<number>(12123);
  date = signal<Date>(new Date());
  object = signal<{ name: string; age: number }>({ name: 'John', age: 30 });


  toggleForm() {
    this.displayForm.set(!this.displayForm());
  }

}
