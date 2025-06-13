import { HelperService } from './../../helper.service';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderTableComponent } from '../../components/header-table.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { listEducations } from '../../mockData/educations';
import { NgFor } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-educations',
  imports: [
    NzGridModule,
    NzIconModule,
    HeaderTableComponent,
    NzDividerModule,
    NzTableModule,
    NzImageModule,
    NzTagModule,
    NgFor,
  ],
  templateUrl: './educations.component.html',
  styles: `
    [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
  `,
})
export class EducationsComponent {
  constructor(private helper: HelperService) {}

  listEducations = listEducations;

  parseDate(text: string) {
    return this.helper.parseTimestamptzToDateString(text);
  }
}
