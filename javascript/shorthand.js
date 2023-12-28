console.log("Shorthand Character Classes(Regular Expressions)");

// *   Character Classes

let regex = /aj([a-z]){2}t/;
regex = /\wet/; //Word character - (backslash)_ , alphabet or numbers
regex = /\wing/;
regex = /\w+in/; //    \w+ means one or more word characters
regex = /\Wbhai/; //     Non-word character (capital W)
regex = /\W+bhai/; //    \W+ more than one non-word character
regex = /\d555/; //    \d means digit
regex = /\d89999/;
regex = /number \d9643/;
regex = /\d+555/; //   \d+ means more than one digit
regex = /number \d+/; //
regex = /\D456/; //   \D means non-digit
regex = /\D+456/; //   \D+ means more than one non-digit character

regex = /\sfor ajeet/; //   \s means matching whitespace characters
regex = /\s+for ajeet/; //   \s+ means match  one or more than one whitespace characters

regex = /\Sto ajeet/; //   /S match non-whitespace character
regex = /\S+to ajeet/; //    \S+ means matching more than one non-whitespace characters

regex = /word\b/; // Word Boundry
regex = /word\b/;

// *           Assertions

regex = /j(?=eet)/; //  j ke baad ho
regex = /j(?!z)/; // j ke baad nahi ho

let str = "Goood morning to ajeet";
str = "Goood mo%rning to ajeet"; //  % is not word character
str = "Goood m_o_r_ning to ajeet";
str = "Goood)_+-+*(&^%$bhai morning to ajeet 77781119999596437659555";
str = "Goood)_+-+*(&^%$bhai morning to ajeet number 3964355555Ajeet4562";

str = "Goood)_+-+*(&^%$bhai morning\tfor ajeet number 3964355555Ajeet4562";
str =
  "Goood)_+-+*(&^%$bhai morning                 for ajeet number 3964355555Ajeet4562";

str = "Goood)_+-+*(&^%$bhai morning-to ajeet number 3964355555Ajeet4562";

str =
  "Goood)_+-+*(&^%$bhai morning-to ajeet wordboundry number 3964355555Ajeet4562";
str =
  "Goood)_+-+*(&^%$bhai morning-to ajeet number word boundry 3964355555Ajeet4562";

let result = regex.exec(str);
console.log(`The Result from exec() is `, result);

if (regex.test(str)) {
  console.log(
    `The String "${str}" matches with the Expression '${regex.source}'`
  );
} else {
  console.log(
    `The String "${str}" do not match with the Expression '${regex.source}'`
  );
}
