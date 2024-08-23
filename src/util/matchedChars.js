export function matchedChars(query, originString) {
  let result = [];
  for (let i = 0; i < originString.length; i++) {
    // check for matching chars in car name and search term
    if (originString[i] === query[0]) {
      //We have a match
      let match = "";
      for (let x = 0; x < query.length; x++) {
        // check future chars for query match and add to match strin
        if (originString[i + x] == query[x]) {
          match += originString[i + x];
        }
      }
      // Increment i by however many chars we matched.
      i += match.length - 1;
      // However many matches we get get added to a span with different text styling
      result.push(<span className="match">{match}</span>);
    } else {
      // no match, add char to array
      result.push(originString[i]);
    }
  }
  return result;
}
