import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private http: HttpClient,
        private state: TransferState,
    ) { }

    public request<T = any>(param: RequestParam) {
        let headers: any = param.header ?? {};

        return this.http
            .request<T>(
                new HttpRequest(param.method, param.url, null, {
                    responseType: 'json',
                    reportProgress: param.reportProgress ?? false,
                    headers: new HttpHeaders(headers),
                })
            )
            .pipe(
                map<any, T | undefined>((res) => {
                    if (param.reportProgress) return res;
                    if ('type' in res && res.type == 0) return undefined;
                    else return res.body;
                }),
                filter((res) => res != undefined)
            );
    }

    public requestSSR<T = any>(param: RequestParam) {
        const key = makeStateKey(`${param.method}:${param.url}`);

        if (isPlatformBrowser(this.platformId)) {
            const state = this.state.get(key, null);
            if (state) {
                return of(state);
            } else {
                return this.request<T>(param);
            }
        } else {
            return this.request<T>(param).pipe(
                tap((data: any) => this.state.set(key, data))
            );
        }
    }
}

interface RequestParam {
    method: string;
    url: string;
    header?: object;
    reportProgress?: boolean;
}