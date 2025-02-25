const findIP = (str) => {
    //const ipRegExp = /([0-9]{1-3}\.{3}[0-9]{1-3})(?=:[0-9]{1-5})?/g
    const ipRegExp = /((?:[0-9]{1,3}\.){3}[0-9]{1,3})(?:\:[0-9]{1,5})?/g

    const potential_matches = str.match(ipRegExp)

    return potential_matches.filter(isIP)
}

const isIP = (str) => {
  const ip_port = str.split(":")
  const ip = ip_port[0]
  const port = ip_port[1] // potentially undefined
  const ip_parts = ip.split(".") // should be 4 and between 0 and 255
  if (ip_parts.length !== 4){
    return false
  }

  if (port !== undefined && (parseInt(port) === NaN || parseInt(port) < 0 || parseInt(port) > 65535)){
    return false
  }

  if (port !== undefined && parseInt(port[0]) === 0 && port.length > 1){
    return false
  }

  for (let i = 0 ; i < ip_parts.length ; i++){
    if (parseInt(ip_parts[i]) === NaN || parseInt(ip_parts[i]) < 0 || parseInt(ip_parts[i]) > 255 ){
      return false
    }

    if (parseInt(ip_parts[i][0]) === 0 && ip_parts[i].length > 1){
      return false
    }
  }

  return true
  
}

console.log(findIP(` /* Expected output (based on provided diff):
  [
    '233.123.12.2',
    '192.168.1.1',
    '192.169.1.2',
    '10.1.23.7',
    '255.255.255.0',
    '0.0.0.0:2',
    '0.0.0.0:6',
    '255.256.123.2:7000',
    '192.168.1.1',
    '0.0.0.0',
    '00.00.00.00'
  ]
  */`))

  const test = [1]

  console.log(test[0])
  console.log(test[1])















// function findIP(str) {
//     // 1. Define an octet.
//     //    Either the single digit "0" OR a nonzero number that can be one or two digits
//     //    OR a three-digit number in the ranges 100–199. 200–249, or 250–255.
//     const octet = '(?:0|[1-9][0-9]?|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
    
//     // 2. Build the full IP address pattern (x.x.x.x)
//     const ipPattern = `${octet}(?:\\.${octet}){3}`;
    
//     // 3. Define a port pattern.
//     //    The port must be in the range 0–65535.
//     //    If it has more than one digit it must not start with 0.
//     //    We break it down into alternatives:
//     //      - "0"
//     //      - or a 1- to 4-digit number that does not start with 0 (i.e. [1-9]\d{0,3})
//     //      - or a 5-digit number that is between 10000 and 65535.
//     //        (The alternatives below ensure numbers above 65535 are rejected.)
//     const portPattern = '(?:0|[1-9]\\d{0,3}|[1-5]\\d{4}|6[0-4]\\d{3}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5])';
    
//     // 4. Combine the IP and optional port.
//     //    We require that if a port is present it is preceded by a colon.
//     //    We also add boundaries so that extra digits immediately before or after do not allow a false match.
//     //    Here we use a positive lookbehind (or an alternation if lookbehind isn’t supported) 
//     //    and a negative lookahead to ensure the match isn’t part of a longer digit sequence.
//     //
//     //    (?:(?<=^)|(?<=[^0-9]))  ensures the character before (if any) isn’t a digit.
//     //    (?![0-9]) ensures the character after isn’t a digit.
//     const fullPattern = `(?:(?<=^)|(?<=[^0-9]))(${ipPattern})(?::(${portPattern}))?(?![0-9])`;
    
//     // 5. Create the regex with the global flag to capture all occurrences.
//     const regex = new RegExp(fullPattern, 'g');
    
//     // Use matchAll so that we can reconstruct the entire matched string (IP plus port if any)
//     const matches = [];
//     for (const match of str.matchAll(regex)) {
//       // match[0] is the full matched string (IP and optional port)
//       matches.push(match[0]);
//     }
    
//     return matches;
//   }
  
//   // === Example Tests ===
//   console.log(findIP("0.0.0.0:5")); // [ '0.0.0.0:5' ]
  
//   console.log(findIP(`console.log(ipRegex.test("199.199.199.199")); // true
//   console.log(ipRegex.test("255.255.255.255")); // true
//   console.log(ipRegex.test("256.100.100.100")); // false
//   console.log(ipRegex.test("0.0.0.0"));`));
  /* Expected output (based on provided diff):
  [
    '233.123.12.2',
    '192.168.1.1',
    '192.169.1.2',
    '10.1.23.7',
    '255.255.255.0',
    '0.0.0.0:2',
    '0.0.0.0:6',
    '255.253.123.2:8',
    '192.168.1.1',
    '0.0.0.0'
  ]
  */
  

// const findIP = (str) => {
//     // 0.0.0.0:65535
//     //const reIP = /([0-9]{1,3}\.){3}[0-9]{1,3}(?:\:[0-6][0-])?/g       //?(?::[0-65535])
//     //const fuck  = /([0-2][0-5][0-5]\.){3}[0-2][0-5][0-5]/
//     const octet = /(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/
//     const portPattern = '(?:(?:[0-9])|(?:[1-9]\\d{1,3})|(?:[1-5]\\d{4})|(?:6[0-4]\\d{3})|(?:65[0-4]\\d{2})|(?:655[0-2]\\d)|(?:6553[0-5]))';

//     //return str.match(reIP) // null to be handled
//     const ipRegExp = new RegExp(`${octet.source}(\\.${octet.source}){3}(?::(${portPattern}))?`,'g')

//     return str.match(ipRegExp)
// }

// console.log(findIP("0.0.0.0:544"))


// console.log(findIP(`
//   [

// -   '233.123.12.234',
// -   '192.168.1.123:8080',
// -   '192.169.1.23',
// -   '0.0.0.0:22',
// -   '255.253.123.2:8000',
// -   '192.168.1.123',
//     '0.0.0.0'
//   ]`))
// i need to generate an array of regexps

// when the first digits are 0 and 1 the degree of freedom of the rest are 0 to 9
// for ports from 0 to 5 for the first the rest are free, for 6 the next one is constrainaed at 5 but 0 to 4 leaves the rest unconstrained

// so basically if n = abcd is the limit then m =  (a-1)bcd , suppose we have a constraint for a and b and c 