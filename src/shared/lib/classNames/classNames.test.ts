import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  it('Should be \'header active dark\'', () => {
    expect(classNames('header', 'active', 'dark')).toBe('header active dark');
  });

  it('Should be \'footer\'', () => {
    expect(classNames(undefined, 'footer', {})).toBe('footer');
  });

  it('Should be \'key nano test\'', () => {
    expect(classNames(
      [
        undefined,
        'key',
        ['nano'],
      ],
      [[[
        ['test'],
        [[undefined]],
      ]]],
    )).toBe('key nano test');
  });

  it('Should be \'jest lol king\'', () => {
    expect(classNames({
      jest: true,
      lol: 1,
      king: -9 + 10,
    }))
      .toBe('jest lol king');
  });

  it('Should be \'table column row group-row group-column\'', () => {
    expect(classNames(
      [{ jordan: false, table: true }],
      {
        column: true,
        list: false,
        link: false,
        row: true,
      },
      [[
        { 'group-row': !!true },
        { 'group-column': !false },
      ]],
    )).toBe('table column row group-row group-column');
  });

  it('Should be empty string \'\'', () => {
    expect(classNames()).toBe('');
    expect(classNames({})).toBe('');
    expect(classNames([])).toBe('');
    expect(classNames('')).toBe('');
    expect(classNames([{}, '', undefined, [[[]]]])).toBe('');
  });

  it('Should not be \'undefined\'', () => {
    expect(classNames(undefined)).not.toBe('undefined');
  });
});
