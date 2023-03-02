import { SquarePipe } from './square.pipe';

describe('SquarePipe:', () => {
  let pipe: any;
  beforeEach(function () {
    pipe = new SquarePipe();
  });

  it('should retrun 4 when passing 2', () => {
    //act
    expect(pipe.transform(2)).toBe(4);
  });

  it('check input is a number', () => {
    //act
    let result = pipe.transform(5);

    expect(typeof result).toBe('number');
  });
});
