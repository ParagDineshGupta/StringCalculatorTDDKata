export class StringCalculator {
  add(numbers: string): number | string {
    try {
      if (numbers === "") return 0;
      const numArray = numbers.split(",");
      const sum = numArray.reduce((sum, num) => sum + +num, 0);
      return sum >= 0
        ? sum
        : "Invalid input. Please enter comma-separated numbers.";
    } catch (error) {
      console.error(error);
      return "Invalid input. Please enter comma-separated numbers.";
      // throw new Error("Invalid input. Please enter comma-separated numbers.");
    }
  }
}
