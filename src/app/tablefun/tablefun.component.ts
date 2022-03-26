import { Component, OnInit } from '@angular/core';
import { TablefunModel } from './tablefun.model';
import { TablefunService } from './tablefun.service';

@Component({
  selector: 'app-tablefun',
  templateUrl: './tablefun.component.html',
  styleUrls: ['./tablefun.component.css'],
})
export class TableFunComponent implements OnInit {
  tableData: TablefunModel;
  sortOrder: string = null;
  activeindex: number;
  constructor(private tablefunservice: TablefunService) {}

  ngOnInit() {
    this.tablefunservice.getTabledata().subscribe((resData) => {
      this.tableData = resData;
    });
    console.log('sortvar', this.sortOrder);
  }

  sortActive(no: number) {
    this.activeindex = no;
    console.log('active', this.activeindex);
    if (this.sortOrder == 'asc') {
      this.sortOrder = 'desc';
    } else {
      this.sortOrder = 'asc';
    }
  }
}
