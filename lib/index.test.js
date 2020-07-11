import LinkedList from "../dist/index";

describe("Linked List tests", () => {
  test("LinkedList should be able to add new nodes", () => {
    const list = new LinkedList();

    let number = 100;
    while (number > 0) {
      list.add(number);
      number -= 1;
    }

    expect(list.contains(25)).toBe(true);
    expect(list.contains(101)).toBe(false);
  });
});
