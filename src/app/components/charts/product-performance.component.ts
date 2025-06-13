import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-product-performance',
  imports: [NgApexchartsModule, ChartComponent],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [xaxis]="xaxis"
      [title]="title"
    ></apx-chart>
  `,
})
export class ProductPerformanceComponent {
  series = [
    {
      name: 'Product A',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'Product B',
      data: [20, 30, 40, 80, 20, 80],
    },
  ];

  chart: ApexChart = {
    height: 350,
    type: 'bar',
  };

  xaxis = {
    categories: [
      'Quality',
      'Value',
      'Popularity',
      'Usability',
      'Features',
      'Support',
    ],
  };

  title: ApexTitleSubtitle = {
    align: 'center',
  };
}
