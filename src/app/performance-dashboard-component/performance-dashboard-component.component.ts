import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';


@Component({
  selector: 'app-performance-dashboard-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-dashboard-component.component.html',
  styleUrl: './performance-dashboard-component.component.css'
})
export class PerformanceDashboardComponentComponent {

  

  @ViewChildren('chartCanvas') chartCanvases!: QueryList<ElementRef>;

  metrics = [
    { title: 'Revenue', value: '$278,600', change: 6.1, icon: 'attach_money', color: 'green' },
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
  }

  createCharts() {
    this.chartCanvases.forEach((canvasRef, index) => {
      const ctx = canvasRef.nativeElement.getContext('2d');
      const metric = this.metrics[index];
      
      const chartConfig: ChartConfiguration = {
        type: 'line',
        data: {
          labels: ['', '', '', '', ''],
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
