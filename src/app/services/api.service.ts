import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public readonly httpService: HttpService
  ) { }

  public search(registry: TRegistry, query: string) {
    switch (registry) {
      case 'npm':
        return this.httpService.request({
          method: 'GET',
          url: `https://npm.doting.ir/-/v1/search?text=${query}`,
        });
    
      default:
        return of(undefined);
    }
  }

  public one(registry: TRegistry, name: string, version: string = 'latest') {
    switch (registry) {
      case 'npm':
        return this.httpService.request({
          method: 'GET',
          url: `https://npm.doting.ir/${name}/${version}`,
        });
    
      default:
        return of(undefined);
    }
  }
}

type TRegistry = 'npm';
