import Node from "./node";

export default class LinkedList {
  head: Node | undefined;
  tail: Node | undefined;

  /**
   * adds value to the end of list
   *
   * example -
   * list ---- [10, 20]
   * value incoming ----- 15
   * list result after prepend operation ---- [10, 20, 15]
   *
   * @param {any} value
   */
  add(value: any) {
    if (!this.tail) {
      this.addFirstNode(value);
      return;
    }

    const previous = this.tail;
    this.tail = new Node(value);
    previous.next = this.tail;
  }

  addFirstNode(value: any) {
    const node = new Node(value);
    this.head = this.tail = node;
  }

  /**
   * check if value is present in list or not
   *
   * example -
   * list ----- [1, 5, 10]
   * value input to search ----- 5
   * result ------ true
   *
   * @param {any} value
   * @returns {boolean}
   */
  contains(value: any): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      return true;
    }

    if (!this.head.next) {
      return false;
    }

    let current = this.head;
    while (current.next && current.value !== value) {
      current = current.next;
    }

    return current.value === value;
  }
}
