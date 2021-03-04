function greetings(name) {
  let welcomeMessage = 'Welcome ' + name;
  return welcomeMessage;
}

let name = prompt('Please provide your name:')
alert(greetings(name));