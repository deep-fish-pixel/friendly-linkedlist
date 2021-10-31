const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('复制数组列表检测', () => {
  const list = new LinkedList([1, 2, 3, 4, 5]);
  const copy = list.clone();
  expect(copy.size()).toBe(5);
  expect(list.toArray().length).toBe(5);
  expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
  testListCommon(list);
});
