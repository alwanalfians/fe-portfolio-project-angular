import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {
    this.capitalizeFirstLetter, this.parseTimestamptzToDateString;
  }

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  parseTimestamptzToDateString = (timestamph: string) => {
    return moment(timestamph).format('DD MMMM yyyy');
  };
}
