// header-table.component.ts
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header-table',
  imports: [
    NzGridModule,
    NzIconModule,
    NzSpaceModule,
    NzInputModule,
    NzButtonModule,
  ],
  template: `
    <nz-row style="margin-bottom: 16px;">
      <nz-col [nzSpan]="12">
        <nz-input-group
          nzSearch
          [nzAddOnAfter]="suffixIconButton"
          style="width: 300px;"
        >
          <input type="text" nz-input placeholder="input search text" />
        </nz-input-group>
        <ng-template #suffixIconButton>
          <button nz-button nzType="primary" nzSearch>
            <nz-icon nzType="search" />
          </button>
        </ng-template>
      </nz-col>
      <nz-col [nzSpan]="12">
        <button
          nz-button
          nzType="primary"
          style="float: right; width: 150px;"
          (click)="onCreate()"
        >
          <i nz-icon nzType="plus"></i>
          Create Data
        </button>
      </nz-col>
    </nz-row>
  `,
})
export class HeaderTableComponent {
  onSearch(value: string): void {
    alert('search data: ' + value);
  }

  onCreate(): void {
    alert('Create new Data');
  }
}
