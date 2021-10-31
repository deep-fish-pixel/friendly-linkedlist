const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('删除元素', () => {
  const list = new LinkedList([-1, 0, 1, 11, 2, 22, 3, 33, 4, 44, 5, 55]);
  list.addLast(6);
  expect(list.getLast()).toBe(6);
  list.addLast(7);
  expect(list.getLast()).toBe(7);
  list.addLast(8);
  expect(list.getLast()).toBe(8);
  list.addLast(9);
  expect(list.getLast()).toBe(9);
  list.addLast(10);
  expect(list.getLast()).toBe(10);
  list.removeFirst();
  expect(list.indexOf(0)).toBe(0);
  list.remove(2);
  expect(list.indexOf(2)).toBe(2);
  list.remove(3);
  expect(list.indexOf(3)).toBe(3);
  list.remove(4);
  expect(list.indexOf(4)).toBe(4);
  list.remove(5);
  expect(list.indexOf(5)).toBe(5);
  list.remove(6);
  expect(list.indexOf(6)).toBe(6);
  list.removeLast();
  expect(list.getLast()).toBe(9);
  list.removeIndexOf(9);
  expect(list.getLast()).toBe(8);
  list.removeLastIndexOf(8);
  expect(list.getLast()).toBe(7);

  testListCommon(list);
});
