const registrationFormInputsCompleted = (req) => (
  !!req.body.firstName
  || !!req.body.lastName
  || !!req.body.username
  || !!req.body.email
  || !!req.body.password
);

export default registrationFormInputsCompleted;
