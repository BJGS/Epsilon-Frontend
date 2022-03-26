import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]',
})
export class SortDirective {
  @Input() appSort: Array<any>;

  constructor(private renderer: Renderer2, private targetElement: ElementRef) {}

  @HostListener('click', ['$event.target'])
  sortData(e) {
    const target = e;
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');

    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute('data-order', 'asc');
      this.renderer.removeClass(target, 'desc');
      this.renderer.addClass(target, 'asc');
    } else {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute('data-order', 'desc');
      this.renderer.removeClass(target, 'asc');
      this.renderer.addClass(target, 'desc');
    }
  }
}
