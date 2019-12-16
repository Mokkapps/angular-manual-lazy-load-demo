import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { LAZY_ROUTES } from './lazy/lazy.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-routes-demo';

  routes: Route[];

  constructor(private router: Router) {}

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
    const appRoutes = [
      ...APP_ROUTES,
      {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
      }
    ];
    this.router.resetConfig([...appRoutes, ...LAZY_ROUTES]);
    this.router.navigate([url ? url : 'lazy']);
    this.routes = this.router.config;
  }

  private isLazyRouteAvailable(): boolean {
    return this.router.config.filter(c => c.path === 'lazy').length > 0;
  }
}
