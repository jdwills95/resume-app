import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <img>', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const img = assignmentElement.querySelector('#profilePicJoeyWillsId');
    expect(img != null);
  });

  it('should have <h4> with "JOEY DOUGLAS WILLS"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const h4 = assignmentElement.querySelector('#contactNameId');
    if (h4 != null) {
      expect(h4.textContent).toEqual(' JOEY DOUGLAS WILLS ');
    } else {
      fail('h4 with "JOEY DOUGLAS WILLS" not found');
    }
  });

  it('should have <strong> with "Application Developer"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#contactTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Application Developer');
    } else {
      fail('strong with "Application Developer" not found');
    }
  });

  it('should have <div> with "14222 Hubbs Acres Rd"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#contactAddressLineOneId');
    if (div != null) {
      expect(div.textContent).toEqual(' 14222 Hubbs Acres Rd ');
    } else {
      fail('div with "14222 Hubbs Acres Rd" not found');
    }
  });

  it('should have <div> with "Pride, LA, USA"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#contactAddressLineCityStateZipId'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' Pride, LA, USA ');
    } else {
      fail('div with "Pride, LA, USA" not found');
    }
  });

  it('should have <a> with "jdwills95@gmail.com"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const a = assignmentElement.querySelector('#contactEmailId');
    if (a != null) {
      expect(a.textContent).toEqual('jdwills95@gmail.com');
    } else {
      fail('a with "jdwills95@gmail.com" not found');
    }
  });

  it('should have <a> with "+1-225-806-5574 (Mobile)"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const a = assignmentElement.querySelector('#contactPhoneId');
    if (a != null) {
      expect(a.textContent).toEqual('+1-225-806-5574 (Mobile)');
    } else {
      fail('a with "+1-225-806-5574 (Mobile)" not found');
    }
  });

  it('should have <button> with "Download Resume PDF"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const button = assignmentElement.querySelector('#downloadResPDFId');
    if (button != null) {
      expect(button.textContent).toEqual(' Download Resume PDF ');
    } else {
      fail('button with "Download Resume PDF" not found');
    }
  });
});
