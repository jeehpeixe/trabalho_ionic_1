import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaDetalhePage } from './turma-detalhe.page';

describe('TurmaDetalhePage', () => {
  let component: TurmaDetalhePage;
  let fixture: ComponentFixture<TurmaDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
