exports.getError404 = (req, res, next) => {
  res
    .status(404)
    .send("Error 404! The Requested Resource or Page doesn't seems to exists.");
};

exports.getError400 = (req, res, next) => {
  res
    .status(400)
    .send(
      "Error 400! You Have entered invalid input, Make sure that title and description are not empty and completed is a boolean value."
    );
};
