module.exports = function (list) {
  let count = 0;
  let node = list.getNode(0);
  while(node){
    if(node.next){
      expect(node.next.value - node.value).toBe(1);
    }
    node = node.next;
    ++count;
  }
  expect(list.size()).toBe(count);
}
