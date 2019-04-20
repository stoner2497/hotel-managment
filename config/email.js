const Verifier = require("email-verifier");

let verifier = new Verifier("your_email_verification_api_key");
verifier.verify(, (err, data) => {
  if (err) throw err;
  console.log(data);
});

module.exports = verifier;
