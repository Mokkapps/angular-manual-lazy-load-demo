import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { LazyLoaderService } from './lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-routes-demo';
  isLoading = false;

  routes: Route[];

  constructor(
    private router: Router,
    private lazyLoaderService: LazyLoaderService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(async routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        if (routerEvent.url.includes('lazy') && !this.isLazyRouteAvailable()) {
          this.loadLazyModule(routerEvent.url);
        }
      }
    });
    this.routes = this.router.config;
  }

  get angularVersion(): string {
    return VERSION.full;
  }

  loadLazyModule(url?: string): void {
    this.isLoading = true;
    this.lazyLoaderService.loadLazyModules().subscribe(() => {
      const config = this.router.config;
      config.push({
        path: 'lazy',
        loadChildren: () => this.lazyLoaderService.getLazyModulePromise('lazy')
      });
      this.router.resetConfig(config);
      this.router.navigate([url ? url : 'lazy']);
      this.routes = this.router.config;

      this.isLoading = false;
    });
  }

  private isLazyRouteAvailable(): boolean {
    return this.router.config.filter(c => c.path === 'lazy').length > 0;
  }
}
