import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-performance-dashboard-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './performance-dashboard-component.component.html',
  styleUrl: './performance-dashboard-component.component.css'
})
export class PerformanceDashboardComponentComponent{

  

  @ViewChildren('chartCanvas') chartCanvases!: QueryList<ElementRef>;

  metrics = [
    { title: 'Revenue', value: '$300,600', change: 6.1, icon: 'attach_money', color: 'green' },
    { title: 'New Customers', value: '162', change: 81, icon: 'person_add', color: 'green' },
    { title: 'Website Sessions', value: '301,544', change: -5, icon: 'language', color: 'red' },
    { title: 'Page Views', value: '420,400', change: 68, icon: 'visibility', color: 'green' },
    { title: 'Churn rate', value: '4.8%', change: -2, icon: 'trending_down', color: 'red' },
    { title: 'Active users', value: '27,883', change: 12, icon: 'group', color: 'green' },
    { title: 'ARPC', value: '57%', change: 3.4, icon: 'trending_up', color: 'orange' },
    { title: 'Bounce Rate', value: '32%', change: 2, icon: 'call_missed_outgoing', color: 'green' }
  ];

  recentDashboards = [
    'Weekly Performance Standard',
    'Marketing Unplanned',
    'Sales Dashboard',
    'Marketing performance Loop',
    'Website Performance Report'
  ];

  ngAfterViewInit() {
    this.createCharts();
    this.crearGraficoTotalConcesiones();
    this.crearGraficoPorRegion();
    this.crearGraficoPorDistrito();
  }

  public chart?: Chart;

  total: string = '48000';

  crearGraficoTotalConcesiones() {

    const data = {
      labels: [
        'Activas',
        'Bloqueadas',
      ],
      datasets: [{
        label: 'Concesiones',
        data: [40000, 8000,],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          
        ],
        hoverOffset: 4
      }]
    };

    this.chart = new Chart("concesionesTotal", {
      type: 'pie' as  ChartType,
      data
    })


  }

  crearGraficoPorRegion() {

    const data = {
      labels: [
        'Cañada',
        'Mixteca',
        'Valles Centrales',
        'Costa',
        'Sierra Norte',
        'Sierra Sur',
        'Istmo',
        'Papaloapan'
      ],
      datasets: [{
        label: 'Concesiones',
        data: [5000, 7000,8000,5500,6200,4800,6500,5000],
        backgroundColor: [
          'rgb(237, 28,36)',
          'rgb(255, 201, 13)',
          'rgb(34,176,76)',
          'rgb(254, 173, 200)',
          'rgb(255, 242, 1)',
          'rgb(1, 162, 232)',
          'rgb(180, 229, 28)',
          'rgb(163, 73, 163)',
          
        ],
        hoverOffset: 4
      }],

    };

    this.chart = new Chart("concesionesRegion", {
      type: 'bar' as  ChartType,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: true },
          title: {
            display: true,
            text: 'Concesiones por región',
            position: 'bottom'
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: function(value, context){
              return value;
            },
            color: 'red',
          }
          
        },
        scales: { 
          x: { 
            display: true,
            
          },
          y: { 
            display: true,
            beginAtZero: true
          }
        }
        
      }
    })


  }

  crearGraficoPorDistrito() {

    const data = {
      labels: [
        "Silacayoapam",
        "Huajuapan",
        "Coixtlahuaca",
        "Teotitlán",
        "Cuicatlán",
        "Tuxtepec",
        "Choapan",
        "Juxtlahuaca",
        "Teposcolula",
        "Nochixtlán",
        "Etla",
        "Ixtlán",
        "Villa Alta",
        "Mixe",
        "Putla",
        "Tlaxiaco",
        "Zaachila",
        "Zimatlán",
        "Centro",
        "Tlacolula",
        "Jamiltepec",
        "Juquila",
        "Sola de Vega",
        "Ejutla",
        "Ocotlán",
        "Miahuatlán",
        "Yautepec",
        "Tehuantepec",
        "Juchitán",
        "Pochutla"
      ],
      datasets: [{
        label: 'Concesiones',
        data: [
          1200, 1800, 1600, 2000, 1500, 1700, 1300, 1900, 1400, 2100,
          2200, 1100, 2300, 2400, 1000, 2500, 2600, 2700, 2800, 2900,
          3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900
        ],
        backgroundColor: [
          'rgb(237, 28, 36)',  // Silacayoapam
          'rgb(255, 201, 13)', // Huajuapan
          'rgb(34, 176, 76)',  // Coixtlahuaca
          'rgb(254, 173, 200)',// Teotitlán
          'rgb(255, 242, 1)',  // Cuicatlán
          'rgb(1, 162, 232)',  // Tuxtepec
          'rgb(180, 229, 28)', // Choapan
          'rgb(163, 73, 163)', // Juxtlahuaca
          'rgb(255, 128, 0)',  // Teposcolula
          'rgb(128, 0, 128)',  // Nochixtlán
          'rgb(255, 0, 128)',  // Etla
          'rgb(0, 255, 128)',  // Ixtlán
          'rgb(0, 128, 255)',  // Villa Alta
          'rgb(255, 128, 255)',// Mixe
          'rgb(128, 255, 128)',// Putla
          'rgb(0, 255, 255)',  // Tlaxiaco
          'rgb(255, 255, 128)',// Zaachila
          'rgb(128, 128, 255)',// Zimatlán
          'rgb(128, 255, 0)',  // Centro
          'rgb(255, 0, 0)',    // Tlacolula
          'rgb(0, 0, 255)',    // Jamiltepec
          'rgb(255, 128, 0)',  // Juquila
          'rgb(128, 0, 0)',    // Sola de Vega
          'rgb(0, 255, 128)',  // Ejutla
          'rgb(128, 128, 0)',  // Ocotlán
          'rgb(255, 0, 128)',  // Miahuatlán
          'rgb(0, 128, 255)',  // Yautepec
          'rgb(255, 255, 0)',  // Tehuantepec
          'rgb(128, 0, 255)',  // Juchitán
          'rgb(255, 0, 255)'   // Pochutla
        ],
        hoverOffset: 4
      }],

    };

    this.chart = new Chart("concesionesDistrito", {
      type: 'bar' as  ChartType,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {  
          legend: { display: false },
          tooltip: { enabled: true },
          title: {
            display: true,
            text: 'Concesiones por distrito'
          },
          datalabels: {
            display: false,
            // anchor: 'end',
            // align: 'top',
            // formatter: function(value, context){
            //   return value;
            // },
            // color: 'red',
          },
        },
        
        scales: { 
          x: { 
            display: true,
            
          },
          y: { 
            display: false,
            beginAtZero: true
          }
        }
        
      }
    })


  }

  createCharts() {
    this.chartCanvases.forEach((canvasRef, index) => {
      const ctx = canvasRef.nativeElement.getContext('2d');
      const metric = this.metrics[index];
      
      const chartConfig: ChartConfiguration = {
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
            data: [300, 450, 320, 480, 400],
            borderColor: this.getColor(metric.color),
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { display: false },
            tooltip: { enabled: false }
          },
          scales: { 
            x: { 
              display: false,
              type: 'linear'
            },
            y: { 
              display: false,
              beginAtZero: true
            }
          },
          elements: {
            line: {
              borderWidth: 2
            },
            point: {
              radius: 0
            }
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            }
          }
        }
      };

      new Chart(ctx, chartConfig);
    });
  }

  getColor(color: string): string {
    switch (color) {
      case 'green': return '#4CAF50';
      case 'red': return '#F44336';
      case 'orange': return '#FF9800';
      default: return '#2196F3';
    }
  }

  getChangeIcon(change: number): string {
    return change >= 0 ? 'arrow_upward' : 'arrow_downward';
  }
}
