import { Component } from '@angular/core';
import { MenuComponent } from '@components/menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
