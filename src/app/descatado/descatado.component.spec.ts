import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescatadoComponent } from './descatado.component';

describe('DescatadoComponent', () => {
  let component: DescatadoComponent;
  let fixture: ComponentFixture<DescatadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescatadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescatadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
