import { Component, OnInit } from '@angular/core';
import { TablefunModel } from './tablefun.model';
import { TablefunService } from './tablefun.service';

@Component({
  selector: 'app-tablefun',
  templateUrl: './tablefun.component.html',
  styleUrls: ['./tablefun.component.css'],
})
export class TableFunComponent implements OnInit {
  tableTitle = ['Product Name', 'Price', 'Category'];
  tableData: TablefunModel;

  constructor(private tablefunservice: TablefunService) {}

  ngOnInit() {
    this.tablefunservice.getTabledata().subscribe((resData) => {
      this.tableData = resData;
      console.log(
        resData.cookies.map((res) => {
          return res.name;
        })
      );
    });
  }
}
