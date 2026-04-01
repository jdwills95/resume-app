import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';

import { IAssignment, IAssignmentJSON } from 'src/app/interfaces/assignment';
import { ICertification, ICertificationJSON } from 'src/app/interfaces/certification';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';
import { IEducation } from 'src/app/interfaces/education';
import { IEmployerHistory } from 'src/app/interfaces/employerHistory';
import { IOther } from 'src/app/interfaces/other';
import { ISkillJson } from 'src/app/interfaces/skills';

@Injectable()
export class GetDataService {
  private assignments$?: Observable<IAssignment[]>;
  private certifications$?: Observable<ICertification[]>;
  private courseTraining$?: Observable<ICourseTrainingItem>;
  private education$?: Observable<IEducation[]>;
  private employerHistory$?: Observable<IEmployerHistory[]>;
  private other$?: Observable<IOther>;
  private skills$?: Observable<ISkillJson>;

  constructor(
    private parseDataService: ParseDataService,
    private http: HttpClient
  ) {}

  getAssignmentData(): Observable<IAssignment[]> {
    if (!this.assignments$) {
      this.assignments$ = this.http
        .get<IAssignmentJSON[]>('assets/data/assignments.json')
        .pipe(
          map((json) => this.parseDataService.setAssignments(json)),
          shareReplay(1)
        );
    }
    return this.assignments$;
  }

  getCertificationsData(): Observable<ICertification[]> {
    if (!this.certifications$) {
      this.certifications$ = this.http
        .get<ICertificationJSON[]>('assets/data/certifications.json')
        .pipe(shareReplay(1));
    }
    return this.certifications$;
  }

  getCourseTrainingData(): Observable<ICourseTrainingItem> {
    if (!this.courseTraining$) {
      this.courseTraining$ = this.http
        .get<ICourseTrainingItem>('assets/data/courses-training.json')
        .pipe(shareReplay(1));
    }
    return this.courseTraining$;
  }

  getEducationData(): Observable<IEducation[]> {
    if (!this.education$) {
      this.education$ = this.http
        .get<IEducation[]>('assets/data/education.json')
        .pipe(shareReplay(1));
    }
    return this.education$;
  }

  getEmployerHistoryData(): Observable<IEmployerHistory[]> {
    if (!this.employerHistory$) {
      this.employerHistory$ = this.http
        .get<IEmployerHistory[]>('assets/data/employer-history.json')
        .pipe(shareReplay(1));
    }
    return this.employerHistory$;
  }

  getOtherData(): Observable<IOther> {
    if (!this.other$) {
      this.other$ = this.http
        .get<IOther>('assets/data/other.json')
        .pipe(shareReplay(1));
    }
    return this.other$;
  }

  getSkillsData(): Observable<ISkillJson> {
    if (!this.skills$) {
      this.skills$ = this.http
        .get<ISkillJson>('assets/data/skills.json')
        .pipe(shareReplay(1));
    }
    return this.skills$;
  }
}
