import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoactorComponent } from './altoactor.component';

describe('AltoactorComponent', () => {
  let component: AltoactorComponent;
  let fixture: ComponentFixture<AltoactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltoactorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltoactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
