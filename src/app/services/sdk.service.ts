import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  constructor(
    public readonly http: HttpService,
    public readonly api: ApiService,
    public readonly functions: FunctionsService
  ) { }
}
