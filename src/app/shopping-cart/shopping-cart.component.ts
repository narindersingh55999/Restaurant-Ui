import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit  {
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];
  dataSource: MatTableDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // Replace this data with your actual data
    const data = [
      { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5' },
      // Add more data here
    ];

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
