import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPauPulidoComponent } from './info-pau-pulido.component';

describe('InfoPauPulidoComponent', () => {
  let component: InfoPauPulidoComponent;
  let fixture: ComponentFixture<InfoPauPulidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPauPulidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPauPulidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
