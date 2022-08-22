const { validationResult } = require("express-validator");
const Message = require("./Message");
// var jwt = require("jsonwebtoken");
// var expressJwt = require("express-jwt");

exports.Enquiry = (req, res) => {
  // const errors = validationResult(req);
  // const { email, password } = req.body;
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({
  //     error: errors.array()[0].msg,
  //   });
  // }
  // User.findOne({ email }, (err, user) => {
  //   if (err || !user) {
  //     return res.status(400).json({
  //       error: "user email does not exist",
  //     });
  //   }
  //   if (!user.authenticate(password)) {
  //     return res.status(401).json({
  //       error: "email or password do not match",
  //     });
  //   }
  //   //create token
  //   const token = jwt.sign({ _id: user._id }, "wtf");
  //   //put token in cookie
  //   res.cookie("token", token, { expire: new Date() + 9999 });
  //   //send response to front end
  //   const { _id, name, email } = user;
  //   return res.json({ token, user: { _id, name, email } });
  // });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const {
    firstname,
    lastname,
    email,
    phone,
    check_in,
    check_out,
    number_of_adults,
    number_of_children,
    query,
  } = req.body;
  const message = new Message({
    firstname,
    lastname,
    email,
    phone,
    check_in,
    check_out,
    number_of_adults,
    number_of_children,
    query,
  });
  console.log(req.body);
  message
    .save()
    .then(() => {
      res.status(201).send("<img src='https://media.istockphoto.com/vectors/thank-you-for-visiting-us-quote-vector-id1298236426?k=20&m=1298236426&s=170667a&w=0&h=bBt4_TSAVgiicfeFXiyMW-aTlijsf64hghQXkwXb3sM='/>");
    })
    .catch((err) => {
      res.status(501).send("<img src='https://media.istockphoto.com/vectors/thank-you-for-visiting-us-quote-vector-id1298236426?k=20&m=1298236426&s=170667a&w=0&h=bBt4_TSAVgiicfeFXiyMW-aTlijsf64hghQXkwXb3sM='/>");
    });
};