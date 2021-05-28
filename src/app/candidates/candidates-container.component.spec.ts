import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesContainerComponent } from './candidates-container.component';

describe('CandidatesContainerComponent', () => {
  let component: CandidatesContainerComponent;
  let fixture: ComponentFixture<CandidatesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
