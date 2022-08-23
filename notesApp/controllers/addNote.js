const Note = require("../models/notes");
//helper function
function getDate() {
  var currentdate = new Date();
  var datetime =
    "Added at: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return datetime;
}

module.exports = async (req, res) => {
  try {
    const note = await Note.create({
      ...req.body,
      userid: req.session.userId,
      date: getDate(),
    });
    res.json({ message: "Note added successfully", data: note, code: 200 });
  } catch (error) {
    res.json({ message: "error accoured", body: error.message });
  }
};
