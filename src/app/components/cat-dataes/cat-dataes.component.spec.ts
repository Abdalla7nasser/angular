import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDataesComponent } from './cat-dataes.component';

describe('CatDataesComponent', () => {
  let component: CatDataesComponent;
  let fixture: ComponentFixture<CatDataesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatDataesComponent]
    });
    fixture = TestBed.createComponent(CatDataesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
