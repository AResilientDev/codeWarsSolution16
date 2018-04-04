function validParentheses(parens){
  //TOdo
  //defines length as half that of the passed in string
  var length = parens.length / 2;
  //iterate the string
  //replaces parens w/ empty strings
  for (var i = 0; i <= length; ++i) {
    parens = parens.replace('()', '');
  }
  //return a boolean
  return parens == '';
}
