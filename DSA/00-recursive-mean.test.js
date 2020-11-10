const LinkedList = require("./00-recursive-mean");

const values = [8, 6, 7, 5, 3, 0, 9];

describe("mean", function () {
  it("calculates the mean of items in a list", function () {
    let lst = new LinkedList(values);
    expect(lst.mean()).toBeCloseTo(5.4286, 4);
  });

  it("returns 0 for empty lists", function () {
    let lst = new LinkedList();
    expect(lst.mean()).toBe(0);
  });
});

describe("meanRecursive", function () {
  it("calculates the mean of items in a list", function () {
    let lst = new LinkedList(values);
    expect(lst.meanRecursive()).toBeCloseTo(5.4286, 4);
  });

    it("matches sum returned with mean()", function () {
    let lst = new LinkedList(values);
    expect(lst.meanRecursive() === lst.mean()).toBe(true);
  });

  it("returns 0 for empty lists", function () {
    let lst = new LinkedList();
    expect(lst.meanRecursive()).toBe(0);
  });
});

describe("push", function () {
  it("appends node and increments length", function () {
    let lst = new LinkedList();

    lst.push(2);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(2);
    expect(lst.tail.val).toBe(2);

    lst.push(4);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(2);
    expect(lst.head.next.val).toBe(4);
    expect(lst.tail.val).toBe(4);

    lst.push(6);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(2);
    expect(lst.head.next.next.val).toBe(6);
    expect(lst.tail.val).toBe(6);
  });
});