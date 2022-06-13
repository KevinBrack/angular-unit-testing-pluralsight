import {StrengthPipe} from './strength.pipe'

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    // arrange
    const pipe = new StrengthPipe();
    // act
    const value = pipe.transform(5)
    // assert
    expect(value).toEqual('5 (weak)');
  })

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();
    const value = pipe.transform(10);
    expect(value).toEqual('10 (strong)');
  })
})
