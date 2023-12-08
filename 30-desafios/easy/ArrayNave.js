function ArrayNave(arr) {
  const newArray = [];

  arr.forEach((numbers) => {
    newArray.push(...numbers);
  });

  return newArray.sort((a, b) => a - b);
}
