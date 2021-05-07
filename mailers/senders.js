const { email } = require("./config");

const welcomeSender = (recipient, name, code) => {
  console.log("Called in Sender");
    email
    .send({
      template: "welcome",
      message: {
        to: recipient,        
      },
      locals: {
        name: name,
        code: code
      }
    })
    .then(console.log)
    .catch(console.error);
};

const forgotPasswordSender = (recipient, name, code) => {
    email
    .send({
      template: "forgot",
      message: {
        to: recipient,        
      },
      locals: {
        name: name,
        code: code
      }
    })
    .then(console.log)
    .catch(console.error);
};

module.exports = {    
    welcomeSender,
    forgotPasswordSender
};

