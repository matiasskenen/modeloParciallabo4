import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltapeliculaComponent } from './altapelicula.component';

describe('AltapeliculaComponent', () => {
  let component: AltapeliculaComponent;
  let fixture: ComponentFixture<AltapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltapeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
