import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JKComponent } from './jk.component';

describe('JKComponent', () => {
  let component: JKComponent;
  let fixture: ComponentFixture<JKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
