import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTickerComponent } from './custom-ticker.component';

describe('CustomTickerComponent', () => {
  let component: CustomTickerComponent;
  let fixture: ComponentFixture<CustomTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
