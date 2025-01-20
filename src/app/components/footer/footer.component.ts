import { Component } from '@angular/core';
import { MenuFooterComponent } from "../menu-footer/menu-footer.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
