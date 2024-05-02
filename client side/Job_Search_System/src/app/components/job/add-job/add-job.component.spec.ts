import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobComponent } from './add-job.component';

describe('AddJobComponent', () => {
  let component: AddJobComponent;
  let fixture: ComponentFixture<AddJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
