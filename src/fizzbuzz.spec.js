import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("debería retornar '1' ya que el número no es múltiplo de 3 ni de 5", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("debería retornar '2' ya que el número no es múltiplo de 3 ni de 5", () => {
    expect(fizzbuzz(2)).toBe("2");
  });

  it("debería retornar 'Fizz' ya que el número 3 es múltiplo de 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("debería retornar 'Fizz' ya que el número 6 es múltiplo de 3", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it("debería retornar 'Buzz' ya que el número 5 es múltiplo de 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("debería retornar 'Buzz' ya que el número 10 es múltiplo de 5", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it("debería retornar 'FizzBuzz' ya que el número 15 es múltiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});
