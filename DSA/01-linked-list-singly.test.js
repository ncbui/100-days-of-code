const LinkedList = require("./01-linked-list-singly");

const values = [8, 6, 7, 5, 3, 0, 9];

describe("unshift", function () {
  it("adds node at start and increments length", function () {
    let lst = new LinkedList();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(15);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    lst.insertAt(6, 5);
    expect(lst.insertAt(6, 5)).toContain('Error');
  });
});

describe("pop", function () {
  it("removes node at end and decrements length", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe(5);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    lst.pop();
    expect(lst.insertAt(6, 5)).toContain('Error');
  });
});

describe("shift", function () {
  it("removes node at start and decrements length", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail.val).toBe(10);
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe(10);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    expect(lst.shift()).toContain('Error');
  });
});

describe("getAt", function () {
  it("gets val at index", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    expect(lst.getAt(0)).toContain('Error');
  });
});

describe("setAt", function () {
  it("sets val at index", function () {
    let lst = new LinkedList([5, 10]);

    expect(lst.setAt(0, 1));
    expect(lst.setAt(1, 2));
    expect(lst.head.val).toBe(1);
    expect(lst.head.next.val).toBe(2);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    expect(lst.pop()).toContain('Error');
  });
});

describe("insertAt", function () {
  it("inserts node and adjusts nearby nodes", function () {
    let lst = new LinkedList([5, 10, 15, 20]);

    lst.insertAt(2, 12);
    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.next.next.val).toBe(12); // 5, 10, 12, 15, 20
    expect(lst.head.next.next.next.val).toBe(15);
    expect(lst.head.next.next.next.next.val).toBe(20);

    lst.insertAt(5, 25); // 5, 10, 12, 15, 20 // if idx = this.length
    expect(lst.head.next.next.next.next.next.val).toBe(25);
    expect(lst.tail.val).toBe(25);
  });

  it("inserts into empty list", function () {
    let lst = new LinkedList();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("removeAt", function () {
  it("removes from 1-item list", function () {
    let lst = new LinkedList(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });

  it("returns error if list is empty", function () {
    let lst = new LinkedList();

    expect(lst.removeAt(9)).toContain('Error');
  });
});
