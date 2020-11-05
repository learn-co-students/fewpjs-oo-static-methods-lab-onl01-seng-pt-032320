class Formatter {
  static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
		return string.replace(/[^A-Za-z0-9-' ]/g, '');
  }
  
  static titleize(string) {
    let words = string.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = [];
    for (const word of words){
      if (words[0] === word){
        newString.push(this.capitalize(word))
      } else if (exceptions.includes(word)){
        newString.push(word)
      } else {
        newString.push(this.capitalize(word))
      }
    }
		return newString.join(' ') ;
	}
}