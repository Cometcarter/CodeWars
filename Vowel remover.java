// Descripton 

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata
// STRINGSFUNDAMENTALS
// Suggest kata description edits

public class Kata {
  public static String shortcut(String input) {
      String str = input.replaceAll("[aeiou]", "");
        return str;
  }
}