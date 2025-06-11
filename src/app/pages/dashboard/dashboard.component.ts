import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { UserEngagementComponent } from '../../components/charts/user-engagement.component';
import { SalesRevenueComponent } from '../../components/charts/sales-revenue.component';
import { CustomerDemographicsComponent } from '../../components/charts/customer-demographics.component';
import { ProductPerformanceComponent } from '../../components/charts/product-performance.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    DecimalPipe,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzStatisticModule,
    NzDividerModule,
    NzTypographyModule,
    UserEngagementComponent,
    SalesRevenueComponent,
    CustomerDemographicsComponent,
    ProductPerformanceComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor() {}
}
