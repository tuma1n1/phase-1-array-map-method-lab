const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => {
    return title.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
}

/*
The titleCased function iterates through each tutorial title in the tutorials array using the map method.

For each tutorial title, it splits the title into an array of words using the split method.

Then, it iterates through each word in the array of words using the map method.

For each word, it capitalizes the first letter using the charAt(0) method to access the first letter and toUpperCase() to capitalize it. It then concatenates it with the rest of the word using slice(1) to get the substring starting from the second character.

Finally, it joins the array of words back into a single string using the join method with a space as the separator.

The titleCased function returns an array of tutorial titles with proper title case formatting.
*/