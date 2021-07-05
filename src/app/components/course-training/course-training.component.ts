import { Component, OnInit } from '@angular/core';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-course-training',
  templateUrl: './course-training.component.html',
  styleUrls: ['./course-training.component.scss'],
})
export class CourseTrainingComponent implements OnInit {
  courseTraining: ICourseTrainingItem = { badges: [], training: [] };

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.setCoursesTraining(this.getDataService.getCourseTrainingData());
  }

  setCoursesTraining(courseTrainingJSON: ICourseTrainingItem): void {
    this.courseTraining = {
      badges: courseTrainingJSON.badges,
      training: courseTrainingJSON.training,
    };
  }
}
