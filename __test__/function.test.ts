
import  { greet } from '../src';

test("greet",() => {
    expect(greet("World")).toBe("Hello, World!");
})