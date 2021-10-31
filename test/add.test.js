const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('添加一个元素', () => {
  const list = new LinkedList([1, 2, 3, 4, 5]);
  list.addLast(6);
  expect(list.getLast()).toBe(6);
  list.addLast(7);
  expect(list.getLast()).toBe(7);
  list.addLast(8);
  expect(list.getLast()).toBe(8);
  list.addLast(9);
  expect(list.getLast()).toBe(9);
  list.addFirst(0);
  expect(list.getFirst()).toBe(0);
  list.addFirst(-1);
  expect(list.getFirst()).toBe(-1);

  testListCommon(list);
});
