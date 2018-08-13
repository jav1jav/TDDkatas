const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('returns a copy of the original string if the length is less than maxLength', () => {
    expect(wrap("Today is Monday", 30)).to.equal("Today is Monday");
  });

  it('returns the same string if the length is equal to maxLength', () => {
    expect(wrap("Today is Monday", 15)).to.equal("Today is Monday");
  });

  it('returns line break at correct spot if maxLength occurs on a space', () => {
    expect(wrap("Today is Monday", 9)).to.equal("Today is \n Monday");
  });

  it('returns line break before word that contains the index equivalent to maxLength', () => {
    expect(wrap("Today is Monday", 14)).to.equal("Today is \n Monday");
  });

  it('returns a column of single words if maxlength is less than the length of any word', () => {
    expect(wrap("Today likes Monday", 2)).to.equal("\n Today \n likes \n Monday");
  });
})

