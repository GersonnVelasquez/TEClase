import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service {
  title = input.required<string>();
  description = input.required<string>();
  iconPath = input.required<string>();


  serviceSelected = output<string>();

  onClick() {
    this.serviceSelected.emit(this.title());
  }
}
