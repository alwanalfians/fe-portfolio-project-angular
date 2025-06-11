import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-sales-revenue',
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
export class SalesRevenueComponent {
  series = [
    {
      name: 'Revenue',
      data: [45000, 47000, 52000, 58000, 62000, 70000],
    },
  ];

  chart: ApexChart = {
    type: 'bar',
    height: 350,
  };

  xaxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  };

  title: ApexTitleSubtitle = {
    align: 'center',
  };
}
