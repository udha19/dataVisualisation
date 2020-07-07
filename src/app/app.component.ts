import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../assets/data';
import mock_data from '../assets/mock.json';
// import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    Object.assign(this, { single });
    this.data = mock_data;
    this.country = [];
    this.countryUK = [];
    this.countryPoland = [];
    this.countryGerman = [];
    this.countryRusia = [];
    this.countryUSA = [];
    this.processedMultiData = [];
    this.processedSingleData = [];
    this.processedStudyData = [];

  }
  title = 'Data Visualisation';

  single: any[];
  view: any[] = [600, 400];

  data: any[];

  country: any[];

  // breaking data var by country
  countryUK: any[];
  countryPoland: any[];
  countryGerman: any[];
  countryRusia: any[];
  countryUSA: any[];
  processedMultiData: any[];
  processedSingleData: any[];
  processedStudyData: any[];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000
        },
        {
          name: '2010',
          value: 73000000
        },
        {
          name: '2011',
          value: 89400000
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000
        },
        {
          name: '2010',
          value: 309000000
        },
        {
          name: '2011',
          value: 311000000
        }
      ]
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000
        },
        {
          name: '2010',
          value: 50000020
        },
        {
          name: '2011',
          value: 58000000
        }
      ]
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000
        },
        {
          name: '2010',
          value: 62000000
        }
      ]
    }
  ];

  ngOnInit() {
    this.getData();
  }

  // tslint:disable-next-line: typedef
  getData(){
    console.log('data =>', this.data);
    this.data.filter(obj => {
      if (obj.country === 'uk'){
        this.countryUK.push(obj);
      }
      if (obj.country === 'poland') {
        this.countryPoland.push(obj);
      }
      if (obj.country === 'russia') {
        this.countryRusia.push(obj);
      }
      if (obj.country === 'german') {
        this.countryGerman.push(obj);
      }
      if (obj.country === 'usa') {
        this.countryUSA.push(obj);
      }
    });
    console.log('data UK =>', this.countryPoland.length);
    this.processingMultiData();
    this.processingSingleData();
  }
  processingSingleData(){
    this.processedSingleData.push(
      {
      name: 'Germany',
      value: this.countryGerman.length
      },
      {
        name: 'Poland',
        value: this.countryPoland.length
      },
      {
        name: 'UK',
        value: this.countryUK.length
      },
      {
        name: 'USA',
        value: this.countryUSA.length
      },
      {
        name: 'Russia',
        value: this.countryRusia.length
      }
    );
    console.log('processed single =', this.processedSingleData);
  }
  // tslint:disable-next-line: typedef
  processingMultiData(){
    let poland_total_completion = 0;
    let poland_total_incompletion = 0;
    let german_total_completion = 0;
    let german_total_incompletion = 0;
    let uk_total_completion = 0;
    let uk_total_incompletion = 0;
    let usa_total_incompletion = 0;
    let usa_total_completion = 0;
    let russia_total_completion = 0;
    let russia_total_incompletion = 0;

    this.countryPoland.filter(data => {
      if (data.quiz_completion === 'complete' ){
        // tslint:disable-next-line: no-unused-expression
        poland_total_completion++;
      }
      if (data.quiz_completion === 'incomplete') {
        // tslint:disable-next-line: no-unused-expression
        poland_total_incompletion++;
      }

    });

    this.countryGerman.filter(data => {
      if (data.quiz_completion === 'complete') {
        // tslint:disable-next-line: no-unused-expression
        german_total_completion++;
      }
      if (data.quiz_completion === 'incomplete') {
        // tslint:disable-next-line: no-unused-expression
        german_total_incompletion++;
      }

    });

    this.countryUK.filter(data => {
      if (data.quiz_completion === 'complete') {
        // tslint:disable-next-line: no-unused-expression
        uk_total_completion++;
      }
      if (data.quiz_completion === 'incomplete') {
        // tslint:disable-next-line: no-unused-expression
        uk_total_incompletion++;
      }

    });

    this.countryUSA.filter(data => {
      if (data.quiz_completion === 'complete') {
        // tslint:disable-next-line: no-unused-expression
        usa_total_completion++;
      }
      if (data.quiz_completion === 'incomplete') {
        // tslint:disable-next-line: no-unused-expression
        usa_total_incompletion++;
      }

    });

    this.countryRusia.filter(data => {
      if (data.quiz_completion === 'complete') {
        // tslint:disable-next-line: no-unused-expression
        russia_total_completion++;
      }
      if (data.quiz_completion === 'incomplete') {
        // tslint:disable-next-line: no-unused-expression
        russia_total_incompletion++;
      }

    });


    this.processedMultiData.push({
      name: 'Poland',
      total: this.countryPoland.length,
      series: [
        {
          name: 'complete',
          value: poland_total_completion
        },
        {
          name: 'incomplete',
          value: poland_total_incompletion
        }
      ]
    },
    {
        name: 'Germany',
        total: this.countryGerman.length,
        series: [
          {
            name: 'complete',
            value: german_total_completion
          },
          {
            name: 'incomplete',
            value: german_total_incompletion
          }
        ]
    },
    {
      name: 'UK',
      total: this.countryUK.length,
      series: [
        {
          name: 'complete',
          value: uk_total_completion
        },
        {
          name: 'incomplete',
          value: uk_total_incompletion
        }
      ]
    },
    {
      name: 'USA',
      total: this.countryUSA.length,
      series: [
        {
          name: 'complete',
          value: usa_total_completion
        },
        {
          name: 'incomplete',
          value: usa_total_incompletion
        }
      ]
    },
    {
      name: 'Russia',
      total: this.countryRusia.length,
      series: [
        {
          name: 'complete',
          value: russia_total_completion
        },
        {
          name: 'incomplete',
          value: russia_total_incompletion
        }
      ]
    }
    );
    console.log('processedMultiData ==', this.processedMultiData);
  }

  processingStudyData(){
    let german_sudy1_data = 0;
    let german_sudy2_data = 0;
    let german_sudy3_data = 0;
    let german_sudy4_data = 0;
    let german_sudy5_data = 0;
    

  }

  onSelect(data): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

  onActivate(data): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

  onDeactivate(data): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
