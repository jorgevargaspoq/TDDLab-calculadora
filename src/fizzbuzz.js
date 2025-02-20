
/*document.getElementById("calcular").addEventListener("click", () => {
    const numero = parseInt(document.getElementById("numero").value, 10);
    if (!isNaN(numero)) {
        document.getElementById("resultado").textContent = Fizzbuzz(numero);
    } else {
        document.getElementById("resultado").textContent = "Ingrese un número válido.";
    }
});*/

function Fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    if (num % 3 === 0) {
        return "Fizz";
    }
    if (num % 5 === 0) {
        return "Buzz";
    }
    return num + "";
}

export default Fizzbuzz;
