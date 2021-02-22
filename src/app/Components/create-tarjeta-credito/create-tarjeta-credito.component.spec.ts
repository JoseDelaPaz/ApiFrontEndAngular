import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTarjetaCreditoComponent } from './create-tarjeta-credito.component';

describe('CreateTarjetaCreditoComponent', () => {
  let component: CreateTarjetaCreditoComponent;
  let fixture: ComponentFixture<CreateTarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTarjetaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
