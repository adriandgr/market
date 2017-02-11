// maxProfit.js by brute force

const digitsRegEx = /^\d*$/;

function maxItem(arr) {
  return Math.max.apply(null, arr);
}

function sellStock(arr) {
  return arr.reduce((a, b) => b - a);
}

function maxProfit(arr) {
  if (!digitsRegEx.test(arr.reduce((a, b) => a + b))) {
    return -1;
  }
  let list = arr.reduce(function(a, b, c) {
    let addBy = 1;
    for (let i = c; i < arr.length - 1; i++ ) {
      if (addBy < 7){
        a.push([b, arr[c+addBy]]);
        addBy++;
      } else {
        addBy = 1;
      }
    }
    return a;
  }, []);

  return maxItem(list.reduce(function(a, b, c) {
    a.push(sellStock(b));
    return a;
  }, []));
  }


module.exports = maxProfit;