import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("debería retornar '1' ya que el número no es múltiplo de 3 ni de 5", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("debería retornar '2' ya que el número no es múltiplo de 3 ni de 5", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("debería retornar 'Fizz' ya que el número es múltiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("debería retornar 'Fizz' ya que el número 6 es múltiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("debería retornar 'Buzz' ya que el número es múltiplo de 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("debería retornar 'Buzz' ya que el número 10 es múltiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("debería retornar 'FizzBuzz' ya que el número 15 es múltiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});
