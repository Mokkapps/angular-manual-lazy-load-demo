import { Component, OnInit } from '@angular/core';
import { LazyLoaderService } from './lazy-loader.service';
import {NavigationStart, Router} from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { LAZY_ROUTES } from './lazy/lazy.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-routes-demo';

  constructor(
    private lazyLoaderService: LazyLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(async routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        if (routerEvent.url === '/lazy') {
          console.log('LAZY ROUTE: ', );
          // this.loadLazyModule();
        }
      }
      console.log('routerEvents: ', routerEvent);
      console.log('New Router Config: ', this.router.config);
    });

  }

  loadLazyModule(): void {
    this.lazyLoaderService.loadModule(() =>
      import('./lazy/lazy.module').then(m => m.LazyModule)
    );

    this.router.resetConfig([...APP_ROUTES, ...LAZY_ROUTES]);
    this.router.navigate(['lazy']);
  }
}
