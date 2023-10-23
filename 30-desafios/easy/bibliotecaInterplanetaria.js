function quotation(fullName) {
  const names = fullName.toUpperCase().split(" ");
  let initials = "";

  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0]}. `;
  }

  return `${names[names.length - 1]},${initials}`;
}

console.log(quotation(`uilian oliveira rocha`));
