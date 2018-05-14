function fullState(abbreviation) {
  if (abbreviation === 'NSW') {
    return 'New South Wales';
  } else if (abbreviation === 'QLD') {
    return 'Queensland';
  } else if (abbreviation === 'VIC') {
    return 'Victoria';
  } else if (abbreviation === 'SA') {
    return 'South Australia';
  } else if (abbreviation === 'WA') {
    return 'Western Australia';
  }
}

const user_input = prompt('Enter a state abbreviation');
const state = fullState(user_input);
alert(state);
