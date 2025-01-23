import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistBoxComponent } from './specialist-box.component';

describe('SpecialistBoxComponent', () => {
  let component: SpecialistBoxComponent;
  let fixture: ComponentFixture<SpecialistBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
