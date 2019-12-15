import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { RouterModule } from '@angular/router';

export const LAZY_ROUTES = [
  {
    path: 'lazy',
    component: LazyHomeComponent
  }
];

@NgModule({
  declarations: [LazyHomeComponent],
  imports: [CommonModule, RouterModule.forChild(LAZY_ROUTES)]
})
export class LazyModule {
  constructor() {
    console.log('🔥 Loaded LazyModule');
  }
}
