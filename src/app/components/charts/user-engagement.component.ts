import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ChartType,
  ApexStroke,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-user-engagement',
  imports: [NgApexchartsModule, ChartComponent],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [xaxis]="xaxis"
      [stroke]="stroke"
      [markers]="markers"
      [title]="title"
    ></apx-chart>
  `,
})
export class UserEngagementComponent {
  series = [
    {
      name: 'Active Users',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  chart: ApexChart = {
    height: 350,
    type: 'line' as ChartType,
    zoom: { enabled: false },
  };

  stroke: ApexStroke = {
    curve: 'smooth',
  };

  markers = {
    size: 5,
  };

  xaxis = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  title: ApexTitleSubtitle = {
    align: 'left',
  };
}
