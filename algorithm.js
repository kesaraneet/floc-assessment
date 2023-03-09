const sort_score = (score, k) => {
  return score.sort(function (left, right) {
    if (left[k] > right[k]) {
      return -1;
    } else {
      return 1;
    }
  });
};

console.log(
  "case 1: ",
  sort_score(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2
  )
);

console.log(
  "case 2: ",
  sort_score(
    [
      [3, 4],
      [10, 6],
      [1, 6],
      [20, 6],
    ],
    0
  )
);
