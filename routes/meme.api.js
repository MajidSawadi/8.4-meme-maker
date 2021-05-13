var express = require('express');
var router = express.Router();
const photoHelper = require("../middleware/photo.helper");
const memeController = require("../controllers/meme.controller");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ status: "ok", data: "Get all memes" });
});
router.get("/", memeController.getMemes);
router.get("/images", memeController.getOriginalImages);

router.post(
  "/",
  uploader.single("image"),
 photoHelper.resize, memeController.createMeme,
  (req, res, next) => {
    console.log(req.file);
    res.json({ status: "ok" });
  }
);
module.exports = router;
