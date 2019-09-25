module.exports = function zeros(expression) {
  let m2 = 0, m5 = 0;

  expression.split('*').forEach(fact => {
    let value = parseInt(fact);

    if (fact.endsWith('!!')) {
      if (value % 2 === 0) {
        m2 += calcFactPrimes(value, 2);
        m5 += calcStepFactPrime5(value, 2);
      }
      else
        m5 += calcStepFactPrime5(value, 3);
    }
    else {
      m2 += calcFactPrimes(value, 2);
      m5 += calcFactPrimes(value, 5);
    }
  });

  return Math.min(m2, m5);
}

function calcFactPrimes(value, prime) {
  let count = 0;
  
  while (value > 1) {
    value = Math.floor(value / prime);
    count += value;
  }

  return count;
}

function calcStepFactPrime5(value, first)
{
  let count = 0;

  for (let i = first; i <= value; i += 2) {
    let num = i;
    while (num % 5 === 0) {
      count++;
      num /= 5;
    }
  }

  return count;
}
