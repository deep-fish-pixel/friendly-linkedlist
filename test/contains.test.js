const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('是否包含一个元素', () => {
  const list = new LinkedList([1, 2, 3, 4, 5]);
  list.addFirst(0);
  list.addLast(6);
  list.addLast(7);
  list.addLast(8);
  list.addLast(9);
  list.push(10);
  for (let index = 0; index < list.size(); index++) {
    expect(list.contains(index)).toBe(true);
  }

  for (let index = 0; index < list.size(); index++) {
    const node = list.getNode(index);
    expect(list.containsNode(node)).toBe(true);
  }

  for (let index = 0; index < list.size(); index++) {
    const node = list.getNode(index);
    expect(list.containsNode(node)).toBe(true);
  }

  testListCommon(list);
});
