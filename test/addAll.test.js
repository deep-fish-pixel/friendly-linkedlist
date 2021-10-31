const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('添加多个集合', () => {
  const list = new LinkedList([2, 5, 8, 12]);
  list.addAll([0, 1], 0);
  list.addAll([3, 4], 3);
  list.addAll([6, 7], 6);
  list.addAll([9, 10, 11], 9);
  list.addAll([13, 14, 15], 13);

  for (let index = 0; index <= 15; index++) {
    expect(list.indexOf(index)).toBe(index);
  }
  for (let index = 0; index <= 15; index++) {
    expect(list.lastIndexOf(index)).toBe(index);
  }

  testListCommon(list);
});
