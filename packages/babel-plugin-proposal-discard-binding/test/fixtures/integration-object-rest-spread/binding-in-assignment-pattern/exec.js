const [void, { p: void, ...rest1 } = { p: 1, q: 2, r: 3 }, ...rest2] = [0, ];

expect(rest1).toEqual({ q: 2, r: 3 });
expect(rest2).toEqual([]);
