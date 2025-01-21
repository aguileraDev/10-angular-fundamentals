import { Component } from '@angular/core';
import { DividerComponent } from '@components/divider/divider.component';
import { FooterComponent } from "@components/footer/footer.component";
import { FeaturesSummaryComponent } from '@components/features-summary/features-summary.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [DividerComponent,FeaturesSummaryComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
