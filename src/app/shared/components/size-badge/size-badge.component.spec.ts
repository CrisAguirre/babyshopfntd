import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeBadgeComponent } from './size-badge.component';

describe('SizeBadgeComponent', () => {
  let component: SizeBadgeComponent;
  let fixture: ComponentFixture<SizeBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeBadgeComponent]
    });
    fixture = TestBed.createComponent(SizeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
