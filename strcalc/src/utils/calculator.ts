function isCharADigit(char: string): boolean {
  return /^[0-9]$/.test(char);
}


function parseNumberRecursive(str: string, i: number): { value: number; nextIndex: number } {
  const n = str.length;
  if (i >= n) {
    throw new Error("parseNumberRecursive called past end of string");
  }

  let sign = 1;
  let start = i;
  if (str[i] === "-") {
    sign = -1;
    start = i + 1;
    if (start >= n || !isCharADigit(str[start])) {
      throw new Error(`Invalid '-' at position ${i} not followed by digit`);
    }
  }

  function collectDigits(idx: number, acc: string): { digits: string; nextIndex: number } {
    if (idx >= n) {
      return { digits: acc, nextIndex: idx };
    }
    const ch = str[idx];
    if (!isCharADigit(ch)) {
      return { digits: acc, nextIndex: idx };
    }
    return collectDigits(idx + 1, acc + ch);
  }

  const { digits, nextIndex } = collectDigits(start, "");
  const value = sign * parseInt(digits, 10);
  return { value, nextIndex };
}

export function addNumbers(input: string): number {
  if (input == null) throw new Error("Enter valid input.");
  if (input.length === 0) return 0;

  const numbers: number[] = [];
  const s = input;
  let i = 0;
  const negatives: number[] = [];

  while (i < s.length) {
    const ch = s[i];

    if (isCharADigit(ch) || (ch === "-" && i + 1 < s.length && isCharADigit(s[i + 1]))) {
      const { value, nextIndex } = parseNumberRecursive(s, i);
      numbers.push(value);

      if (value < 0) {
        negatives.push(value);
      }

      i = nextIndex;
      continue;
    }

    i += 1;
  }

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.reduce((acc, v) => acc + v, 0);
}


