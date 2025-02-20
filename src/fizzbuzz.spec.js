import fizzbuzz from "./fizzbuzz.js";
describe("Fizzbuzz", () => {
  it("debería generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});
