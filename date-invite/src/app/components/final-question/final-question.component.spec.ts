import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalQuestionComponent } from './final-question.component';

describe('FinalQuestionComponent', () => {
  let component: FinalQuestionComponent;
  let fixture: ComponentFixture<FinalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
