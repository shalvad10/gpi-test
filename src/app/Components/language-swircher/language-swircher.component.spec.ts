import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwircherComponent } from './language-swircher.component';

describe('LanguageSwircherComponent', () => {
  let component: LanguageSwircherComponent;
  let fixture: ComponentFixture<LanguageSwircherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwircherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwircherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
