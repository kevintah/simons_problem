// Non optimized solution to simon's problem
// classical version of the problem ( quantum implementation coming soon)
// It finds the secret
// Optimization coming soon

var n = 3;

var simon_pairs = {
  
                    "000" : "101",
                    "001" : "010",
                    "010"	: "000",
                    "011"	: "110",
                    "100"	: "000",
                    "101"	: "110",
                    "110"	: "101",
                    "111"	: "010"
                  } 


var keys = Object.keys(simon_pairs);
var values = Object.values(simon_pairs);
var match_pair = [];

for (let i = 0; i < values.length; i++) {
  for (let k = i + 1; k < values.length; k++) {
      if (values[i] == values[k]) {
        match_pair.push(i);
        match_pair.push(k);
        
      }
  }
}

var secret = (eval(keys[match_pair[0]] ^ keys[match_pair[1]]));



console.log(keys);
console.log(values);
console.log(match_pair);

console.log("The secret is" + " " + secret);
