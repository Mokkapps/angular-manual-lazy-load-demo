import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

const APP_ROUTES = [
  {
    path: '',
    component: LazyHomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [LazyHomeComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTES)]
})
export class LazyModule {}
