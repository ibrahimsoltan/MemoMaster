const Note = require("../models/notes");
module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.session.userId;
    const result = await Note.findOne({ id, userid: userId });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
