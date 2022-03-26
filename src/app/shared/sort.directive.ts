import { Directive, Input, ElementRef, HostListener } from '@angular/core';

import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]',
})
export class SortDirective {
  @Input() appSort: Array<any>;

  constructor(private targetElement: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');

    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
    }
  }
}