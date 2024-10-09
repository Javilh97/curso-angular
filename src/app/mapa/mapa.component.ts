import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as Papa from 'papaparse';

import * as ChartGeo from 'chartjs-chart-geo';
import { FeatureCollection } from 'geojson'

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})

export class MapaComponent implements OnInit {
  
  ngOnInit(): void {
    this.construirMapa();
  }

  public chart?: Chart;
  construirMapa(){
    Promise.all([
      fetch('https://unpkg.com/us-atlas/states-10m.json')
      .then((r) => r.json()),
       fetch('https://gist.githubusercontent.com/mbostock/9535021/raw/928a5f81f170b767162f8f52dbad05985eae9cac/us-state-capitals.csv')
            .then((r) => r.text()).then((d) => Papa.parse(d, { dynamicTyping: true, header: true}).data)
    ]).then(([us, data]) => {
      
      const states = ChartGeo.topojson.feature(us, us.objects.states) as unknown as FeatureCollection;
    
      this.chart = new Chart("canvas", {
        type: 'bubbleMap', 
        data: {
          labels: data.map((d: any) => d.description),
          datasets: [{
            //outline: states,
            showOutline: true,
            backgroundColor: 'steelblue',
            data: data.map((d: any) => Object.assign(d, {value: Math.round(Math.random() * 10)})),
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
            datalabels: {
              align: 'top',
              formatter: (v: { description: any; }) => {
                return v.description;
              }
            }
          },
          scales: {
            projection: {
              axis: 'x',
              projection: 'albersUsa', 
            },
            size: {
              axis: 'x',
              
            },
          }
        }
      });
    });
  }
}
