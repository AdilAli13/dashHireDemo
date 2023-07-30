import {AfterViewInit, Component, Injectable, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  zone: string;
  region: string;
  team: string;
  royalities: string;
  enrolements: string;
  month: string;
}

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})

export class TableComponentComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'zone', 'region', 'team', 'month', 'royalities', 'enrolements'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},
 {name:'Piya Mukerjee', zone: 'West', region: 'MUM', team:'Marketing', month : 'Jan', royalities: '41,65,5078', enrolements: '3,461'},

];
