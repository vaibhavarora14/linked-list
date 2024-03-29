## Linked List In EcmaScript(JavaScript)

![ci](https://github.com/varora1406/linked-list/workflows/ci/badge.svg) [<img src="https://img.shields.io/npm/v/linked-list-ecmascript" />](https://www.npmjs.com/package/linked-list-ecmascript) [<img src="https://img.shields.io/github/license/varora1406/linked-list"/>](https://github.com/varora1406/linked-list/blob/master/LICENSE) [![codecov](https://codecov.io/gh/varora1406/linked-list/branch/master/graph/badge.svg)](https://codecov.io/gh/varora1406/linked-list)

🚀🚀 Production ready implementation of [linked list](https://en.wikipedia.org/wiki/Linked_list) in EcmaScript

![Linked List](./design/LinkedList.png)

## Example

```js
import LinkedList from "linked-list";

const list = new LinkedList();
list.add(1);
list.add(2);

list.contains(2); // true
list.remove(2);
list.contains(2); // false
```

## API

---

### Insertion

- #### add(element)

  add element to end of the list

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(3);

  // list - [2 -> 1 -> 3]
  ```

- #### prepend(element)

  add element to start of the list

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.prepend(3);
  list.add(4);
  // list - [3 -> 2 -> 1 -> 4];
  ```

### Deletion

- #### remove()

  removes element from the list

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(3);
  // list - [2 -> 1 -> 3]

  list.remove(1);
  // list - [2 -> 3]
  ```

### Search

- #### contains()

  check if element is present in the list or not

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(3);
  // list - [2 -> 1 -> 3]

  list.contains(4); //false
  list.contains(2); //true
  ```

### Traverse

- #### traverse()

  iterate on list from start to end

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(3);
  // list - [2 -> 1 -> 3]

  const generator = list.traverse();
  for (const value of generator) {
    console.log(value);
  }
  // console - 2, 1, 3
  ```

- #### reverseTraversal()

  iterate on list from end to start

  ```js
  const list = new LinkedList();
  list.add(2);
  list.add(1);
  list.add(3);
  // list - [2 -> 1 -> 3]

  const generator = list.reverseTraversal();
  for (const value of generator) {
    console.log(value);
  }
  // console - 3, 1, 2
  ```
