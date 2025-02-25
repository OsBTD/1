const pyramid = (symbol, height) => {
    let result = "";
    for (let i = 1; i <= height; i++) {
      // Compute leading spaces and symbols for the current row
      let spaces = " ".repeat(symbol.length).repeat(height - i);
      let symbols = symbol.repeat(2 * i - 1);
      
      // Append the row to the result
      result += spaces + symbols;
      // Add a newline if this is not the last row
      if (i < height) {
        result += "\n";
      }
    }
    return result;
  };

// const pyramid = (symbol, height) => {
//     var pyramid = ''
//     var halfpadding =  ''
//     var symbols = ''
//     var line = ''
//     for (let i=1 ; i <= height ; i++) {
//         //var num_spaces = Math.floor(i*height/2) // height - num_symbols/2
//         var num_symbols = 2*i - 1
//         var num_spaces = 2*height - 2*i + 1
//         halfpadding = ' '.repeat(Math.floor(num_spaces/2))
//         symbols = symbol.repeat(num_symbols)

        
//         pyramid += halfpadding + symbols + halfpadding + "\n"
//        // console.log(i)
//        // console.log(pyramid)
//     }

//     return pyramid.slice(0,pyramid.length - 1)
// }

console.log(pyramid('*',5))

console.log(pyramid('aa', 5))