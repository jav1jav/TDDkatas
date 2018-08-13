const wrap = (string, maxLength) => {
  if (string.length < maxLength) {
    return string;
  }
  else {
    // insert new line at indexOf maxLength
    const ourArray = string.split(' ');
    let charTotal = 0; //6
    let newArray = [];

    for (let i = 0; i < ourArray.length; i++){
      let currEl = ourArray[i];
      charTotal += currEl.length + 1;
      if (charTotal <= maxLength){
        newArray.push(currEl);
      } else {
        newArray.push('\n');
        charTotal = 0;
        newArray.push(currEl);
      }
    }
    return newArray.join(' ');
  }
};
module.exports = wrap;
