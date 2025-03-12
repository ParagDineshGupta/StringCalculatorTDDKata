export class StringCalculator {
  add(numbers: string): number | string {
    try {
      if (numbers === "") return 0;
      // const delimiterRegx = new RegExp(/[,;]\s\n*/);
      // const numArray = numbers.split(/[,;|\s]/).filter(Boolean);
      const delimiter = this.getDelimiter(numbers);
      let numArray = numbers
        .replace(/\n+/g, delimiter)
        // .replace(/\D+/g, " ")       // Remove non-digit characters and split by digits
        .trim()
        .split(delimiter)
        .filter(Number);

      console.log(delimiter, numArray);
      const negatives = numArray.find((num) => +num < 0);
      console.log(negatives);
      if (negatives) return "Negative numbers not allowed";

      const sum = numArray.reduce((sum, num) => sum + +num, 0);
      return numArray.length ? sum : "Invalid input.";
    } catch (error) {
      console.error(error);
      return "Invalid input.";
    }
  }
  getDelimiter(numbers: string): string {
    if (numbers.startsWith("//")) {
      const [str] = numbers.split("\n");
      return str.substring(2);
    }
    return ",";
  }
}
