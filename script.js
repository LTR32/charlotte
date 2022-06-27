function remove_first_last_quotes(input) {
  var text = input.val();
  var formatted_text = text;
  if (text.charAt(0) === '"' && text.charAt(text.length -1) === '"')
  {
    formatted_text = text.substr(1,text.length -2);
  }
  input.val(formatted_text);
}
               

function format(input) {
  var input_val = input.val();
  //input_val = input_val.slice(1,-1);
  input_val = input_val.replace(/\"\"/gm, "\"");
  //input_val = remove_first_last_quotes(input_val);
  console.log(input_val);
  input.val(input_val);
}


