const findMatching = (drivers, string) => {
  return drivers.filter((name) => {
    return name.toLowerCase() === string.toLowerCase();
  });
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter((name) => {
    return name.slice(0, string.length) === string;
  });
}

const matchName = (drivers, string) => {
  return drivers.filter((person) => {
    return person.name === string;
  });
}
