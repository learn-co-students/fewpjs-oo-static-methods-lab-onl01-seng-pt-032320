class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, "")
  }

  static titleize(s){
    const modifiers = ['but', 'of', 'and', 'for', 'the', 'a', 'an', 'at', 'by', 'from']
    const wordArray = s.split(" ")

    const titleizedStr = wordArray.map((word, i) => {
      if (i == 0 || !modifiers.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return titleizedStr.join(" ")
  }
}