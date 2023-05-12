import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoEstudioComponent } from './trabajo-estudio.component';

describe('TrabajoEstudioComponent', () => {
  let component: TrabajoEstudioComponent;
  let fixture: ComponentFixture<TrabajoEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
