import { Injectable } from '@angular/core';
import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private timeAgo = new TimeAgo('en');

  constructor() { }

  public formatAgo(item: string) {
    try {
      return this.timeAgo.format(new Date(item));
    } catch (error) {
      return '';
    }
  }

  public formatVersion(item: string | object) {
    if (typeof item == 'string') {
      return item;
    } else if (typeof item == 'object') {
      const keys = Object.keys(item);
      if (keys.length != 0) {
        return keys[0];
      }
    }

    return 'latest';
  }
}
