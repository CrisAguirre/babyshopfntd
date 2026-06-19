import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimBannerComponent } from './slim-banner.component';

describe('SlimBannerComponent', () => {
  let component: SlimBannerComponent;
  let fixture: ComponentFixture<SlimBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlimBannerComponent]
    });
    fixture = TestBed.createComponent(SlimBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
