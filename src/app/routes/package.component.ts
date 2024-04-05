import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SdkService } from '../services/sdk.service';


@Component({
  selector: 'app-package',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full min-h-[10vh]"></div>
    
      <div class="flex flex-col gap-4">
        <div class="flex flex-nowrap items-end gap-1">
          <h3 class="font-bold roboto-bold text-5xl">{{name}}</h3>
          <span>{{version}}</span>
        </div>
  
        <p class="text-sm text-gray-400">{{ package.description }}</p>

        <div class="flex flex-wrap gap-1">
          @if(package.keywords) {
            @for (item of package.keywords; track $index) {
              <span class="bg-base-200 rounded-btn py-1 px-2 text-xs">
                {{ item }}
              </span>
            }
          }
        </div>

        <br class="block h-[32px]" />

        <div class="flex flex-nowrap items-center justify-between gap-4 border rounded-btn p-2 w-[360px]">
          <div class="flex flex-col">
            <span class="text-xs text-gray-400">Change registry</span>
            <span class="text-sm">npm set registry https://npm.registry.doting.ir/</span>
          </div>

          <button class="btn btn-sm btn-circle btn-ghost tooltip" data-tip="Copy">
            <span class="material-icons-round">
              content_copy
            </span>
          </button>
        </div>

        <div class="flex flex-nowrap items-center justify-between gap-4 border rounded-btn p-2 w-[360px]">
          <span class="text-sm">npm i {{name}}&#64;{{version}}</span>

          <button class="btn btn-sm btn-circle btn-ghost tooltip" data-tip="Copy">
            <span class="material-icons-round">
              content_copy
            </span>
          </button>
        </div>
    </div>
  `,
  host: {
    class: 'flex flex-col items-center gap-4 w-full min-h-full container mx-auto'
  }
})
export class PackageComponent {
  public fetching: boolean = false;

  private subscription!: Subscription;

  public name: string = '';
  public version: string = '';

  public package: any = {
    'description': '',
    'keywords': [],
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly sdkService: SdkService
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      let name = '';
      let version = params['version'] ?? 'latest';

      if (params['scope']) {
        name = `${params['scope']}/${params['name']}`;
      } else {
        name = params['name']
      }

      this.name = name;
      this.version = version;

      this.fetch(name, version);
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }


  public formatVersion(item: string | object) {
    return this.sdkService.functions.formatVersion(item);
  }

  public formatAgo(item: string) {
    return this.sdkService.functions.formatAgo(item);
  }

  private fetch(name: string, version: string) {
    this.fetching = true;

    this.sdkService.api.one('npm', name, version).subscribe({
      next: (res) => {
        this.package = res;
      }
    })
  }
}
