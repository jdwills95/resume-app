import { Component, OnInit } from '@angular/core';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';

import _courseTrainingJSON from 'src/assets/data/courses-training.json';

@Component({
  selector: 'app-course-training',
  templateUrl: './course-training.component.html',
  styleUrls: ['./course-training.component.scss'],
})
export class CourseTrainingComponent implements OnInit {
  courseTrainingJSON = _courseTrainingJSON as ICourseTrainingItem;
  courseTraining: ICourseTrainingItem = this.getCoursesTraining(
    this.courseTrainingJSON
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
