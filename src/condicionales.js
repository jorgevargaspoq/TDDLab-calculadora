export default function condicionales(a, b) {
    if ((b % 3==0) && (b % 5==0)) {
      return "fizzbuzz";
    }
    else if (b % 3==0) {
        return "fizz";
      }
    else if (b % 5==0) {
        return "buzz";
      }
      else  {
        return "No es divisible ni entre 3 ni 5";
      }
  }
  