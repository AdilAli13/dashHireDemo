import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-component',
  templateUrl: './area-component.component.html',
  styleUrls: ['./area-component.component.scss']
})
export class AreaComponentComponent implements OnInit {

  public chartOptions: Object= {}
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    title: {
        text: 'Average RPC',
        align: 'left',
        fontSize: '2px'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      tickPositions: [0, 100, 200, 300, 400],
      gridLineWidth: 1
    },
    series: [{ 
      data: [70, 240, 310, 190, 182, 300, 292, 265, 233, 183, 139, 196]
    }]
    }
  }

}
