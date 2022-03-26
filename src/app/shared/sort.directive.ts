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
  _elementClass: string;

  constructor(private renderer: Renderer2, private targetElement: ElementRef) {}

  @HostListener('click', ['$event.target'])
  sortData(e) {
    this.renderer.addClass(e, this._elementClass);
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');

    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'asc');
      //this.setAttributes(elem, { 'data-order': 'asc', class: 'asc' });
      this._elementClass = 'asc';
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'desc');
      //this.setAttributes(elem, { 'data-order': 'desc', class: 'desc' });
      this._elementClass = 'desc';
    }
  }

  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
}
