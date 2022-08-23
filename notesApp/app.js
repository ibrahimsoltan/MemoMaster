const express = require('express')
const mongoose  = require('mongoose')
const Note  = require("./models/notes")
const app = express()
const cors = require("cors");
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')

app.use(cors({credentials: true, origin :true }));
app.use(express.json());  
app.use(cookieParser())
const DbURI = 'mongodb+srv://user1:TestApp2022@cluster0.dp8rbp4.mongodb.net/NotesDb?retryWrites=true&w=majority'
mongoose.connect(DbURI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(8000))
    .catch(err => console.log(err)
)

app.use(expressSession({
    secret: 'keyboard cat'
    }))
  
  //We first declare a global variable loggedIn that will be accessible from all our EJS files. 
  global.loggedIn = null;
  

app.get('/', async (req,res)=>{
    const notes = await Note.find()
    res.json({data : notes})
    
})

app.post('/add/:id',require("./controllers/addNote") )
app.get('/notes/:id' , require("./controllers/getAllNote"))
app.get('/note/:id', require("./controllers/getNoteById")) 
app.post('/signup', require("./controllers/signup"))
app.post('/signin', require("./controllers/signin"))
app.get("/signout",require("./controllers/signout"))
