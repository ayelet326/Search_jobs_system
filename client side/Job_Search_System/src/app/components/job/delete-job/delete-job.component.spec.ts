import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobComponent } from './delete-job.component';

describe('DeleteJobComponent', () => {
  let component: DeleteJobComponent;
  let fixture: ComponentFixture<DeleteJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
