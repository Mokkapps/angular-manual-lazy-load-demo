import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-lazy',
  templateUrl: './dynamic-lazy.component.html',
  styleUrls: ['./dynamic-lazy.component.css']
})
export class DynamicLazyComponent implements OnInit {
  constructor() {
    console.log('🔥 Loaded DynamicLazyComponent');
  }

  ngOnInit() {}
}
