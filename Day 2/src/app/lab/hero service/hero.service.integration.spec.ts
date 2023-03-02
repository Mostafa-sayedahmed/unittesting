import { of } from 'rxjs';
import { HeroServiceForLab } from './hero.service';

describe('HeroServiceForLab', () => {
  let murl = jasmine.createSpyObj(['getHeros']);
  murl.getHeros = jasmine.createSpy().and.returnValue(of());
  let heroservice = new HeroServiceForLab(murl);
  it('HeroServiceForLab', () => {
    expect(heroservice.getHeroes()).toHaveBeenCalled();
  });
});
