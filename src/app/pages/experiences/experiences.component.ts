import { HelperService } from './../../helper.service';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderTableComponent } from '../../components/header-table.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { listExperiences } from '../../mockData/experiences';
import { NgFor } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-experiences',
  imports: [
    NzGridModule,
    NzIconModule,
    HeaderTableComponent,
    NzDividerModule,
    NzTableModule,
    NzImageModule,
    NzTagModule,
    FormsModule,
    NzButtonModule,
    NgFor,
  ],
  templateUrl: './experiences.component.html',
  styles: `
    [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
  `,
})
export class ExperiencesComponent {
  constructor(private helper: HelperService) {}

  listEducations = listExperiences;

  parseDate(text: string) {
    return this.helper.parseTimestamptzToDateString(text);
  }
}
