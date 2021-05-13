var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();
const router = express.Router();
const cors = require("cors")

// All route of Meme
const memeAPI = require("./routes/meme.api");
router.use("/memes", memeAPI);

module.exports = router;

var indexRouter = require('./routes/index');
const upload = require("./middleware/upload.helper").upload;

var app = express();

router.post("/", upload.single("image"), (req, res, next) => {
    console.log(req.file);
    res.json({ status: "ok" });
  });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

app.use('/api', indexRouter);


module.exports = app;
