import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoComponent } from './hermano.component';

describe('HermanoComponent', () => {
  let component: HermanoComponent;
  let fixture: ComponentFixture<HermanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HermanoComponent]
    });
    fixture = TestBed.createComponent(HermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
