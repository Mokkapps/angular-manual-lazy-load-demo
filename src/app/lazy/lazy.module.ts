import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MatToolbarModule } from '@angular/material';

export const LAZY_ROUTES: Routes = [
  {
    path: '',
    component: LazyHomeComponent,
    children: [
      {
        path: 'dynamic-component',
        component: PlaceholderComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LazyHomeComponent, PlaceholderComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule.forChild(LAZY_ROUTES)]
})
export class LazyModule {
  constructor() {
    console.log('🔥 Loaded LazyModule');
  }
}
