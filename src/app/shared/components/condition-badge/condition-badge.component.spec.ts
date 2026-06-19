import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBadgeComponent } from './condition-badge.component';

describe('ConditionBadgeComponent', () => {
  let component: ConditionBadgeComponent;
  let fixture: ComponentFixture<ConditionBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionBadgeComponent]
    });
    fixture = TestBed.createComponent(ConditionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
