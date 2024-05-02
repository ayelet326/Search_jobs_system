import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobComponent } from './update-job.component';

describe('UpdateJobComponent', () => {
  let component: UpdateJobComponent;
  let fixture: ComponentFixture<UpdateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
