import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: ViewContainerRef;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  async ngOnInit() {
    import('../../dynamic-lazy/dynamic-lazy.component').then(
      ({ DynamicLazyComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          DynamicLazyComponent
        );
        const componentRef = this.templateViewContainerRef.createComponent(
          component
        );
      }
    );
  }
}
