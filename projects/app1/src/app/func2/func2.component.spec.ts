import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Func2Component } from './func2.component';

describe('Func2Component', () => {
  let component: Func2Component;
  let fixture: ComponentFixture<Func2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Func2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Func2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
