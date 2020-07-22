import Node from "./node";

export default class LinkedList {
  private head: Node | undefined;
  private tail: Node | undefined;

  /**
   * adds value to the end of list
   *
   * example -
   * list ---- [10, 20]
   * value incoming ----- 15
   * list result after append operation ---- [10, 20, 15]
   *
   * @param {any} value
   */
  append(value: any) {
    if (!this.tail) {
      this.addFirstNode(value);
      return;
    }

    const previous = this.tail;
    this.tail = new Node(value);
    previous.next = this.tail;
  }

  private addFirstNode(value: any) {
    const node = new Node(value);
    this.head = this.tail = node;
  }

  /**
   * adds value to the start of list
   *
   * example -
   * list ---- [10, 20]
   * value incoming ----- 15
   * list result after prepend operation ---- [15, 10, 20]
   *
   * @param {any} value
   */
  prepend(value: any) {
    const node = new Node(value);

    if (this.head) {
      const oldHead = this.head;
      this.head = node;
      node.next = oldHead;
      return;
    }

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

  /**
   * remove if value is present in list
   *
   * example -
   * list ----- [1, 5, 10]
   * value to be removed --------- 5
   * list remaining ----- [1, 10]
   * @param {any} value
   * @returns {boolean}
   */
  remove(value: any) {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = undefined;
      return true;
    }

    if (!this.head.next) {
      return false;
    }

    let current = this.head;
    let previous = current;
    while (current.next && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current.value === value) {
      if (current === this.tail) {
        previous.next = undefined;
        this.tail = previous;
        return true;
      }

      previous.next = current.next;
      return true;
    }

    return false;
  }

  /**
   * traverse the list from start to end
   *
   * example -
   * // list ----- [1, 5, 10]
   * for(const value of traverse(list)) {
   *  console.log(value)
   * }
   * // console - 1, 5, 10
   */
  *traverse() {
    let current = this.head;

    while (current !== undefined) {
      yield current.value;
      current = current.next;
    }
  }

  /**
   * traverse the list from end to start
   *
   * example -
   * // list ----- [1, 5, 10]
   * for(const value of traverse(list)) {
   *  console.log(value)
   * }
   * // console - 10, 5, 1
   */
  *reverseTraversal() {
    let current = this.tail;

    while (current !== undefined) {
      yield current.value;

      let searching = this.head;
      while (searching && searching.next !== current) {
        searching = searching.next;
      }

      if (!searching || searching === current) {
        current = undefined;
      } else {
        current = searching;
      }
    }
  }
}
