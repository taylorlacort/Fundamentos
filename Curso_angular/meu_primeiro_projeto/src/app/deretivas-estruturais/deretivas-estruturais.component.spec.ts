import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeretivasEstruturaisComponent } from './deretivas-estruturais.component';

describe('DeretivasEstruturaisComponent', () => {
  let component: DeretivasEstruturaisComponent;
  let fixture: ComponentFixture<DeretivasEstruturaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeretivasEstruturaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeretivasEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
