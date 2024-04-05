import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SdkService } from '../services/sdk.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="w-full min-h-[10vh]"></div>
    <!-- Logo -->
    <div class="relative text-4xl xl:text-6xl 2xl:text-8xl font-bold roboto-bold z-0">
      <h1 aria-hidden="true" class="h-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 absolute blur-3xl select-none z-0"> Doting Registry </h1>
      <h1 class="h-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 z-0"> Doting Registry </h1>
    </div>
    
    <!-- Search bar -->
    <div class="flex flex-col rounded-btn bg-base-100 w-full max-w-[600px] sticky top-4 transition-all shadow-xl z-10 hover:shadow-2xl focus:shadow-2xl">
      <div class="flex flex-nowrap items-center gap-4 h-[52px] px-4">

        <div class="w-[24px] h-[24px] flex items-center justify-center">
          @if(fetching) {
            <span class="loading loading-spinner loading-sm"></span>
          } @else {
            <span class="material-icons-round text-gray-400">
              search
            </span>
          }
        </div>

        <input [(ngModel)]="search" (keyup.enter)="submit()" type="text" placeholder="Search packages" class="w-full h-full outline-none bg-transparent placeholder:text-gray-400" />
      </div>
    </div>

    <!-- search results -->
    @if(total != -1) {
      <div class="flex flex-col w-full max-w-[600px]">
        @if(total == 0) {

        } @else {
          @for (item of items; track $index) {
            <a routerLink="/package/{{item.package.name}}/{{item.package.version}}" class="flex flex-col gap-2 p-4 border-b transition-all hover:shadow-2xl hover:border-transparent hover:rounded-btn">
              <h3 class="font-bold roboto-bold">{{item.package.name}}</h3>

              <p class="text-gray-400">
                {{ item.package.description }}
              </p>

              <div class="flex flex-wrap gap-1">
                @if(item.package.keywords) {
                  @for (item of item.package.keywords; track $index) {
                    <span class="bg-base-200 rounded-btn py-1 px-2 text-xs">
                      {{ item }}
                    </span>
                  }
                }
              </div>

              <br class="block h-[32px]" />

              <div class="flex flex-nowrap items-center gap-1 text-sm">
                @if(item.package.publisher && (item.package.maintainers == undefined || item.package.maintainers.length == 0)) {
                  <strong>{{ item.package.publisher.username }}</strong>
                }

                @if(item.package.maintainers) {
                  @for(item of item.package.maintainers.slice(0, 3); track $index) {
                    <strong>{{ item.name ?? item.username }}</strong>
                  }
                }

                <span class="text-gray-400">published</span>
                <span class="text-gray-400">{{ formatVersion(item.package.version ?? item.package.versions) }}</span>
                <span>{{ formatAgo(item.package.date ?? item.package.time.modified) }}</span>
              </div>
            </a>
          }

          <span class="text-xs text-center p-4">Found {{total}} packages</span>
        }
      </div>
    }

    <footer class="mt-auto pt-10 pb-4">
      <div class="container mx-auto">
        <span>Created by <a href="https://heymirza.ir">Mirza</a></span>
      </div>
    </footer>
  `,
  host: {
    class: 'flex flex-col items-center gap-20 w-full min-h-full'
  }
})
export class HomeComponent {
  public search: string = '';

  public fetching: boolean = false;

  public total: number = -1;
  public items: any[] = [];

  private subscription!: Subscription;
  private searchSubscription!: Subscription;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sdkService: SdkService
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['q']) {
        this.search = params['q'];
        this.fetching = false;
        this.fetch();
      }
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

  public submit() {
    this.total = -1;
    this.items = [];
    this.searchSubscription.unsubscribe();
    this.router.navigate(['/'], {
      queryParams: {
        q: this.search
      }
    })
  }

  public formatVersion(item: string | object) {
    return this.sdkService.functions.formatVersion(item);
  }

  public formatAgo(item: string) {
    return this.sdkService.functions.formatAgo(item);
  }

  private fetch() {
    if (this.search.length < 2) return;
    this.fetching = true;
    this.subscription = this.sdkService.api.search('npm', this.search).subscribe({
      next: (res) => {
        this.items = res['objects'];
        this.total = res['total'];

        this.fetching = false;
      },
      error: () => {
        this.fetching = false;
      }
    })
  }
}
