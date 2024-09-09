import { Component } from '@angular/core';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PasswordGeneratorComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
