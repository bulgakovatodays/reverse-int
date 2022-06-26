module.exports = function reverse (n) {
  let a = Math.abs(n);
  let massiv = String(a).split('');
  //console.log(massiv);
  let vissam = massiv.reverse();
  //console.log(vissam);
  let newN = vissam.toString('');
  //console.log(newN);
  let string = newN.replace(/,/g, '')
  //console.log(string);
  let number = Number(string);
  return number;
}