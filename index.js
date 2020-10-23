class Formatter {
  //add static methods here
  static capitalize(line) {
    let newLine = line.charAt(0).toUpperCase() + line.slice(1);
    return newLine;
  }

  static sanitize(line) {
    let newLine = line.replace(/[^\s-'a-zA-Z]/g, "");
    return newLine;
  }

  static titleize(line) {
    let stringArray = line.split(" ");
    let newLine;
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    for (let i = 0; i < stringArray.length; i++) {
      if (i === 0){
        newLine = this.capitalize(stringArray[i]) + " ";
      } else if (words.includes(stringArray[i])) {
        newLine += stringArray[i] + " ";
      } else {
        if (stringArray[stringArray.length - 1] === stringArray[i]) {
          newLine += this.capitalize(stringArray[i]);
        } else {
          newLine += this.capitalize(stringArray[i]) + " ";
        }
      }
    }

    return newLine;
  }
}