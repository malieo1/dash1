import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DailyLineChartData,
  ProjectStatData,

} from '../models';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public loadDailyLineChartData(): Observable<DailyLineChartData> {
    return of({
      dailyData: {
        mobile: [16, 46, 45, 12, 37, 16, 41, 13, 25, 22, 30],
        desktop: [42, 60, 49, 50, 13, 15, 16, 57, 56, 27, 43],
        tablet: [35, 25, 36, 30, 67, 35, 64, 12, 25, 36, 39]
      },
      weeklyData: {
        mobile: [23, 31, 45, 10, 37, 67, 43, 63, 15, 22, 30],
        desktop: [67, 60, 49, 50, 25, 15, 16, 57, 13, 27, 43],
        tablet: [56, 48, 23, 48, 13, 35, 64, 12, 45, 36, 39]
      },
      monthlyData: {
        mobile: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        desktop: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        tablet: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      },
      labels: [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003'
      ]
    });
  }


  public loadProjectsStatsData(): Observable<ProjectStatData> {
    return of({
      lightBlue: {
        daily: {
          name: 'employé',
          users: '199',
          percent: -3.7,
          registrations: '33',
          bounce: '3.25%',
          views: '330',
          series: [
            { name: 'Net Profit', data: [210, 95, 155, 200, 61, 135, 63] }
          ]
        },
        week: {
          name: 'employé',
          users: '1293',
          percent: 3.1,
          registrations: '233',
          bounce: '3.1%',
          views: '2310',
          series: [
            { name: 'Net Profit', data: [65, 195, 135, 95, 72, 155, 200] }
          ]
        },
        monthly: {
          name: 'employé',
          users: '9991',
          percent: -3.1,
          registrations: '725',
          bounce: '3.3%',
          views: '12301',
          series: [
            { name: 'Net Profit', data: [152, 61, 142, 183, 74, 195, 210] }
          ]
        }
      },
      singApp: {
        daily: {
          name: 'structure',
          users: '121',
          percent: -3.2,
          registrations: '15',
          bounce: '3.01%',
          views: '302',
          series: [
            { name: 'Net Profit', data: [135, 65, 192, 215, 85, 154, 75] }
          ]
        },
        week: {
          name: 'structure',
          users: '956',
          percent: 2.9,
          registrations: '295',
          bounce: '3.15%',
          views: '2401',
          series: [
            { name: 'Net Profit', data: [78, 145, 186, 64, 78, 135, 224] }
          ]
        },
        monthly: {
          name: 'structure',
          users: '9982',
          percent: -3.23,
          registrations: '712',
          bounce: '3.2%',
          views: '12256',
          series: [
            { name: 'Net Profit', data: [59, 75, 153, 194, 87, 205, 215] }
          ]
        }
      },
      rns: {
        daily: {
          name: 'group',
          users: '175',
          percent: -3.1,
          registrations: '31',
          bounce: '3.23%',
          views: '301',
          series: [
            { name: 'Net Profit', data: [205, 81, 175, 192, 52, 199, 206] }
          ]
        },
        week: {
          name: 'group',
          users: '1395',
          percent: 3.21,
          registrations: '235',
          bounce: '3.23%',
          views: '2215',
          series: [
            { name: 'Net Profit', data: [51, 186, 159, 201, 72, 86, 212] }
          ]
        },
        monthly: {
          name: 'group',
          users: '9125',
          percent: -3.3,
          registrations: '756',
          bounce: '3.1%',
          views: '12025',
          series: [
            { name: 'Net Profit', data: [161, 84, 151, 201, 45, 196, 57] }
          ]
        }
      }
    });
  }
}
