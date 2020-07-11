export default class Node {
  value: any;
  next: Node | undefined;

  constructor(value: any, next?: Node) {
    this.value = value;
    this.next = next;
  }
}
