import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from '../../services';
import {
  DailyLineChartData,
  ProjectStatData,
} from '../../models';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  public dailyLineChartData$: Observable<DailyLineChartData>;
  public projectsStatsData$: Observable<ProjectStatData>;

  constructor(private service: DashboardService) {
    this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    this.projectsStatsData$ = this.service.loadProjectsStatsData();
  }
}
