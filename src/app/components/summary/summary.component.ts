import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: false,
})
export class SummaryComponent implements OnInit {
  summary: string = '';

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getSummaryData().subscribe((summary) => {
      this.summary = summary;
    });
  }
}
