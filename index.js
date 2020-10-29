class Formatter {
  //add static methods here
  

  static capitalize(inputString){
    let string = inputString.split("");
    string[0] = string[0].toUpperCase();
    return string.join("");;
  }

  static titleize(inputString){
    const exceptList = "the, a, an, but, of, and, for, at, by, from".split(", ");
    let sentence = inputString.split(" ");
    let result = sentence.map(words => {
      if(!exceptList.includes(words) || words==sentence[0])
      { 
        return this.capitalize(words); 
      }
      else { return words; }
    })
    return result.join(" ");
  }

  static sanitize(inputString){
    return inputString.replace( /[^A-Za-z0-9 '-]/g, '' )

  }

}
