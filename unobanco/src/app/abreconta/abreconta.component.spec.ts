import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrecontaComponent } from './abreconta.component';

describe('AbrecontaComponent', () => {
  let component: AbrecontaComponent;
  let fixture: ComponentFixture<AbrecontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrecontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrecontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
