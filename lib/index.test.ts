import LinkedList from "./index";

describe("Linked List tests", () => {
  test("add(): should be able to add new nodes", () => {
    const list = new LinkedList();

    let number = 100;
    while (number > 0) {
      list.add(number);
      number -= 1;
    }

    expect(list.contains(25)).toBe(true);
    expect(list.contains(101)).toBe(false);
  });

  test("remove(): should be able to remove added nodes", () => {
    const list = new LinkedList();
    expect(list.remove(2)).toBe(false);

    list.add(2);
    expect(list.remove(2)).toBe(true);

    const list3 = new LinkedList();
    list3.add(2);
    expect(list3.remove(3)).toBe(false);

    const list2 = new LinkedList();
    let number = 200;
    while (number > 0) {
      list2.add(number);
      number -= 1;
    }

    expect(list2.contains(25)).toBe(true);
    list2.remove(25);
    expect(list2.contains(25)).toBe(false);

    expect(list2.remove(200)).toBe(true);

    const list4 = new LinkedList();
    list4.add(2);
    list4.add(4);
    list4.add(5);
    list4.add(3);
    expect(list4.remove(3)).toBe(true);
    expect(list4.remove(6)).toBe(false);
  });

  test("contains(): should work fine in different scenarios", () => {
    const list = new LinkedList();

    expect(list.contains(1)).toBe(false);

    list.add(1);
    expect(list.contains(1)).toBe(true);
    expect(list.contains(2)).toBe(false);
  });

  test("traverse(): should work fine in different scenarios", () => {
    const list = new LinkedList();

    expect(list.traverse().next().value).toBeFalsy();

    const array = [1, 2];

    array.forEach((value) => {
      list.add(value);
    });

    const generator = list.traverse();
    array.forEach((value) => {
      const next = generator.next();
      const traversedNextValue = next.value;
      expect(traversedNextValue).toBe(value);
    });
  });

  test("prepend(): should work fine in different scenarios", () => {
    const list = new LinkedList();

    let number = 100;
    while (number > 0) {
      list.prepend(number);
      number -= 1;
    }

    expect(list.contains(25)).toBe(true);
    expect(list.contains(101)).toBe(false);
  });
});
