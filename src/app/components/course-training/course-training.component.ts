import { Component, OnInit } from '@angular/core';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';

import courseTrainingJSON from 'src/app/data/courses-training.json';

@Component({
  selector: 'app-course-training',
  templateUrl: './course-training.component.html',
  styleUrls: ['./course-training.component.scss'],
})
export class CourseTrainingComponent implements OnInit {
  courseTraining: ICourseTrainingItem = this.getCoursesTraining(
    courseTrainingJSON
  );

  constructor() {}

  ngOnInit(): void {}

  getCoursesTraining(
    courseTrainingJSON: ICourseTrainingItem
  ): ICourseTrainingItem {
    return {
      badges: courseTrainingJSON.badges,
      training: courseTrainingJSON.training,
    };
  }
}
