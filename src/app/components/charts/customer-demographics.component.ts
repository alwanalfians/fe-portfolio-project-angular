import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-customer-demographics',
  imports: [NgApexchartsModule, ChartComponent],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [labels]="labels"
      [title]="title"
    ></apx-chart>
  `,
})
export class CustomerDemographicsComponent {
  series = [44, 55, 13, 43, 22];
  labels = ['USA', 'UK', 'India', 'Germany', 'China'];

  chart: ApexChart = {
    type: 'pie',
    height: 350,
  };

  title: ApexTitleSubtitle = {
    align: 'center',
  };
}
