import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponentForLab } from './counter.component';

describe('Counter Component for lab', () => {
  let component: CounterComponentForLab;
  let fixture: ComponentFixture<CounterComponentForLab>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponentForLab],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
  });

  it('when click btn fires increse fun should the interpolation detect the change', () => {
    let btn = fixture.debugElement.queryAll(By.css('button'))[0];
    btn.triggerEventHandler('click');
    expect(component.counter).toBe(1);
  });
  it('when click btn fires decrese fun should the interpolation detect the change', () => {
    let btn2 = fixture.debugElement.queryAll(By.css('button'))[1];
    btn2.triggerEventHandler('click');
    expect(component.counter).toBe(-1);
  });
});
