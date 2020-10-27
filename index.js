class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^\w\s\-\.']/g,'');
  }

  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capWords = []
    let words = string.split(" ")
    for (let i = 0; i < words.length; i++){
      
      if (except.includes(words[i])) {
        if (i === 0){
          capWords.push(this.capitalize(words[i]))
        }
        else {
          capWords.push(words[i])
        }
      }
      else {
        capWords.push(this.capitalize(words[i]))
      }
    }

    return capWords.join(" ");
  }
}