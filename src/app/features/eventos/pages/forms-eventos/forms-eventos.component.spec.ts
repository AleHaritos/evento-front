import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEventosComponent } from './forms-eventos.component';

describe('FormsEventosComponent', () => {
  let component: FormsEventosComponent;
  let fixture: ComponentFixture<FormsEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsEventosComponent]
    });
    fixture = TestBed.createComponent(FormsEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
