import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaFirebase } from '../../services/persona-firebase';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  personaService = inject(PersonaFirebase);

  customers = toSignal<{ name: string; email: string; id: string }[]>(
    this.personaService.getPersonas(),
  );

  name = signal('');
  email = signal('');
  id = signal('');

  async saveData() {
    if (this.id()) {
      await this.personaService.updatePersona(this.id(), { name: this.name(), email: this.email() });
    } else {
      await this.personaService.createPersona({ name: this.name(), email: this.email() });
    }
    // Reset form fields
    this.id.set('');
    this.name.set('');
    this.email.set('');
  }

  deletePersona(id: string) {
    this.personaService.deletePersona(id);
  }

  editPersona(customer: { name: string; email: string; id: string }) {
    this.id.set(customer.id);
    this.name.set(customer.name);
    this.email.set(customer.email);
  }
}
