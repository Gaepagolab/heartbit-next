export const parseCSV = (str: string): unknown => {
  const arr = [];
  let quote = false;

  for (let row = 0, col = 0, c = 0; c < str.length; c++) {
    const cc = str[c],
      nc = str[c + 1];
    arr[row] = arr[row] || [];
    arr[row][col] = arr[row][col] || "";
    if (cc == '"' && quote && nc == '"') {
      arr[row][col] += cc;
      ++c;
      continue;
    }
    if (cc == '"') {
      quote = !quote;
      continue;
    }
    if (cc == "," && !quote) {
      ++col;
      continue;
    }
    if (cc == "\r" && nc == "\n" && !quote) {
      ++row;
      col = 0;
      ++c;
      continue;
    }
    if (cc == "\n" && !quote) {
      ++row;
      col = 0;
      continue;
    }
    if (cc == "\r" && !quote) {
      ++row;
      col = 0;
      continue;
    }
    arr[row][col] += cc;
  }
  return arr;
};

export const fetchCsv = (filepath: string) => {
  return fetch(filepath).then((response) => {
    let reader = response.body.getReader();
    let decoder = new TextDecoder("utf-8");

    return reader.read().then((result) => {
      const stream = decoder.decode(result.value);
      return parseCSV(stream);
    });
  });
};
