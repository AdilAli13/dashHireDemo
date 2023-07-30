import { Component, OnInit } from '@angular/core';
interface Type {
  value: string;
  viewValue: string;
}

interface Zone {
  value: string;
  viewValue: string;
}

interface Region {
  value: string;
  viewValue: string;
}

interface Team_Type {
  value: string;
  viewValue: string;
}

interface Person {
  value: string;
  viewValue: string;
}

interface Center_Type {
  value: string;
  viewValue: string;
}

interface Center_Name {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-top-widget',
  templateUrl: './top-widget.component.html',
  styleUrls: ['./top-widget.component.scss']
})
export class TopWidgetComponent implements OnInit {
 
  selectedType: string;
  selectedZone: string;
  selectedRegion: string;
  selectedTeam: string;
  selectedPerson: string;
  selectedCenter: string;
  selectedCenters: string;


  type: Type[] = [
    {value: 'RPC-0', viewValue: 'RPC-0'},
    {value: 'RPC-1', viewValue: 'RPC-1'},
  ];

  zone: Region[] = [
    {value: 'North', viewValue: 'North'},
    {value: 'South', viewValue: 'South'},
    {value: 'East', viewValue: 'East'},
    {value: 'West', viewValue: 'West'},
  ];
  region: Region[] = [
    {value: 'MUM', viewValue: 'MUM'},
    {value: 'PUN', viewValue: 'PUN'},
    {value: 'DEL', viewValue: 'DEL'},
  ];
  team: Region[] = [
    {value: 'Marketing', viewValue: 'Marketing'},
    {value: 'Engineering', viewValue: 'Engineering'},
    {value: 'Finance', viewValue: 'Finance'},
  ];
  person: Region[] = [
    {value: 'Priya Mukerjee', viewValue: 'Priya Mukerjee'},
    {value: 'ABC', viewValue: 'ABC'},
    {value: 'XYZ', viewValue: 'XYZ'},
  ];
  center: Region[] = [
    {value: 'Warrior', viewValue: 'Warrior'},
    {value: 'Fighter', viewValue: 'Fighter'},
  ];
  centers: Region[] = [
    {value: 'Malad-Mumbai', viewValue: 'Malad-Mumbai'},
    {value: 'Hj-Pune', viewValue: 'Hj-Pune'},
    {value: 'DLF-Delhi', viewValue: 'DLF-Delhi'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
