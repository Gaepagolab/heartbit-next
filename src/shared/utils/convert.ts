export function covertToKRW(number: number): string {
  const inputNumber = number < 0 ? false : number;
  if (!inputNumber) return;
  const unitWords = ["", "만", "억", "조", "경"];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray: number[] = [];
  let resultString = "";

  for (let i = 0; i < splitCount; i++) {
    let unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (i === 0) continue;
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
}
