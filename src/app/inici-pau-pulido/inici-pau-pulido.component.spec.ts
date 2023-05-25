import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciPauPulidoComponent } from './inici-pau-pulido.component';

describe('IniciPauPulidoComponent', () => {
  let component: IniciPauPulidoComponent;
  let fixture: ComponentFixture<IniciPauPulidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciPauPulidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciPauPulidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
