import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();

  constructor() {}

  getLazyModule(key: string): Promise<unknown> {
    return this.lazyMap.get(key);
  }

  loadLazyModules(): Observable<number | void> {
    return of(1).pipe(
      delay(2000),
      tap(() => {
        this.lazyMap.set(
          'lazy',
          import('./lazy/lazy.module').then(m => m.LazyModule)
        );
      })
    );
  }
}
