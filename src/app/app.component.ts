import { Component, } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ReviewComponent } from './components/review/review.component';
import { FeaturesComponent } from "./components/features/features.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, ReviewComponent, FeaturesComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'A more productive you, one card at a time';
}
