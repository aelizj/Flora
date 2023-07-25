const isValidName = (entry) => {
  console.log(entry)
  console.log(entry.length > 2 && entry.length <= 140)
  return entry.length > 2 && entry.length <= 140;
}

const isValidUsername = (entry) => {
  return entry.length > 0 || entry.length <= 140;
}
const isValidEmail = (entry) => {
  return entry.match(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/);
}

const isValidPassword = (entry) => {
  return (entry.length >= 8 && entry.length <= 140);
}

export {isValidName, isValidUsername, isValidEmail, isValidPassword};
