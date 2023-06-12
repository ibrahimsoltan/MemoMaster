const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/notes");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

// Put your origin here (What you see in the browser in the client side)
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(express.json());
app.use(cookieParser());
// This should be hidden in a .env file
require('dotenv').config();

  const DbURI = process.env.MONGODB_URL;
  mongoose.connect(DbURI,
      { useNewUrlParser: true, useUnifiedTopology: true })
      .then(result => app.listen(PORT, () => {
          console.log(`server started on port ${PORT}`);
        }))
      .catch(err => console.log(err)
  )


app.use(
  expressSession({
    secret: "This should be a hidden secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
        secure: false,
    },
    
    rolling: true,
  })
);

app.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json({ data: notes });
});

app.post("/add/", require("./controllers/addNote"));
app.get("/notes/", require("./controllers/getAllNote"));
app.get("/note/:id", require("./controllers/getNoteById"));

app.post("/signup", require("./controllers/signup"));
app.post("/signin", require("./controllers/signin"));
app.get("/signout", require("./controllers/signout"));

