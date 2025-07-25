import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFormComponent } from './usuarios-form.component';


describe('UsuariosForm', () => {
  let component: UsuariosFormComponent;
  let fixture: ComponentFixture<UsuariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
