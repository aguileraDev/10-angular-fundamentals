import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
