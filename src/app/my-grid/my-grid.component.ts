import { Component, OnInit } from '@angular/core';
import { ColorCompComponent } from '../color-comp/color-comp.component';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  private gridOptions: GridOptions;
  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'Emp Id',
        field: 'empid',
        width: 100
      },
      {
        headerName: 'Name',
        field: 'name',
        width: 100
      },
      {
        headerName: 'Department',
        field: 'dept',
        width: 100
      },
      {
        headerName: 'Company',
        field: 'company',
        width: 100
      }
    ];
    // this.gridOptions.columnDefs = [
    //   {
    //     headerName: 'Emp Id',
    //     field: 'empid',
    //     width: 100
    //   },
    //   {
    //     headerName: 'Department',
    //     field: 'dept',
    //     width: 100
    //   },
    //   {
    //     headerName: 'Company',
    //     field: 'company',
    //     width: 100
    //   },
    //   {
    //     headerName: 'Name',
    //     field: 'name',
    //     width: 100
    //   }
    // ];
    this.gridOptions.rowData = [
      {empid: 101, name: 'Sam', dept: 'Engg', company: 'SonicWall'},
      {empid: 102, name: 'Dinesh', dept: 'Services', company: 'Quest'},
      {empid: 104, name: 'Mark', dept: 'Engg', company: 'Dell'},
      {empid: 202, name: 'Kann', dept: 'R&D', company: 'SonicWall'},
      {empid: 108, name: 'Jin', dept: 'IT', company: 'SonicWall'},
      {empid: 103, name: 'Adesh', dept: 'Engg', company: 'Dell'},
    ];
   }

  ngOnInit() {
  }

}
