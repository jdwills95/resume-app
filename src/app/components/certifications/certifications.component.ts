import { Component, OnInit } from '@angular/core';
import { ICertification } from 'src/app/interfaces/certification';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  certifications: ICertification[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.setCertifications(this.getDataService.getCertificationsData());
  }

  setCertifications(certificationsJson: ICertification[]): void {
    this.certifications = certificationsJson.map((certification) => {
      return {
        issuedBy: certification.issuedBy,
        certName: certification.certName,
        issueDate: certification.issueDate,
        expiresDate: certification.expiresDate,
        certLink: certification.certLink,
        certImg: certification.certImg,
      };
    });
  }
}
