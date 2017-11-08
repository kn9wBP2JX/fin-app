import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsCardsComponent } from './tests-cards.component';

describe('TestsCardsComponent', () => {
  let component: TestsCardsComponent;
  let fixture: ComponentFixture<TestsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
