
function fizzBuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("FizzBuzz");
      document.getElementById("demo").innerHTML += `<p class="p"> FizzBuzz &nbsp
    </p>`;
    } else if (num % 3 === 0) {
      console.log("Fizz");
      document.getElementById("demo").innerHTML += `<p class="p"> Fizz &nbsp
        </p>`;
    } else if (num % 5 === 0) {
      console.log("Buzz");
      document.getElementById("demo").innerHTML += `<p class="p"> Buzz &nbsp
        </p>`;
    } else {
      console.log(num);
      document.getElementById("demo").innerHTML += `<p class="p"> ${num} &nbsp
        </p>`;
    }
  }
}

document.getElementById("demo").call = fizzBuzz();

