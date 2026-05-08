import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Service } from '../service/service';
interface ServiceModel {
  title: string;
  description: string;
  iconPath: string;
  subServices?: ServiceModel[];
}

@Component({
  selector: 'app-services',
  imports: [Service],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  services = signal<ServiceModel[]>(
    [
      {
        title: 'Service 1',
        description: 'Description of service 1.',
        iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
        subServices: [
          {
            title: 'Subservice 1.1',
            description: 'Description of subservice 1.1.',
            iconPath: 'M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z M9 12l2 2 4-4',
          },
          {
            title: 'Subservice 1.2',
            description: 'Description of subservice 1.2.',
            iconPath: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3 12h18 M12 3a14 14 0 010 18 M12 3a14 14 0 000 18',
          }
        ]
      },
      {
        title: 'Service 2',
        description: 'Description of service 2.',
        iconPath:
          'M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z M9 12l2 2 4-4',
      },
      {
        title: 'Service 3',
        description: 'Description of service 3.',
        iconPath:
          'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3 12h18 M12 3a14 14 0 010 18 M12 3a14 14 0 000 18',
      },
      {
        title: 'Service 4',
        description: 'Description of service 4.',
        iconPath:
          'M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z M9 12l2 2 4-4',
      }
    ]
  );



  onServiceSelected(serviceTitle: string) {
    alert(`Selected service: ${serviceTitle}`);
  }
}
