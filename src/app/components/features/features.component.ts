import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import { FooterComponent } from "../footer/footer.component";
import { FeaturesSummaryComponent } from '../features-summary/features-summary.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [DividerComponent,FeaturesSummaryComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
