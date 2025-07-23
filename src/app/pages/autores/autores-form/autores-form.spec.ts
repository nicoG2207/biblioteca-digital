import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresForm } from './autores-form.component';

describe('AutoresForm', () => {
  let component: AutoresForm;
  let fixture: ComponentFixture<AutoresForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoresForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoresForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
