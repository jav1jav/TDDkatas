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
      let currEl = ourArray[i];     // curreEl = Monday
      charTotal += currEl.length;
      if (charTotal <= maxLength){  // charTotal =  15, maxLenth = 15
        charTotal++ // to be the space after a word  // charTotal = 16
        newArray.push(currEl); // Total, is, Monday
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
