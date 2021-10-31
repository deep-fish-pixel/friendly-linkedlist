const LinkedList = require('../src/index');
const testListCommon = require('./testListCommon');

test('替换一个元素', () => {
  const list = new LinkedList([1, 2, 3, 4, 5]);
  list.addFirst(0);
  list.addLast(6);
  list.addLast(7);
  list.addLast(8);
  list.addLast(9);
  list.push(10);
  for (let index = 0; index < list.size(); index++) {
    list.set(index + 100, index);
  }
  for (let index = 0; index < list.size(); index++) {
    const indexOf = list.indexOf(index + 100);
    expect(indexOf).toBe(index);
  }
  for (let index = 0; index < list.size(); index++) {
    const indexOf = list.lastIndexOf(index + 100);
    expect(indexOf).toBe(index);
  }
  for (let index = 0; index < list.size(); index++) {
    const node = list.getNode(index);
    const indexOf = list.indexOfNode(node);
    expect(indexOf).toBe(index);
  }
  for (let index = 0; index < list.size(); index++) {
    const node = list.getNode(index);
    const indexOf = list.lastIndexOfNode(node);
    expect(indexOf).toBe(index);
  }

  testListCommon(list);
});
