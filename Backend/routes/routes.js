const express = require("express")
const router = express.Router();

var libraryController = require("../src/library/libraryController");

router.route("/library/getBooks").get(libraryController.getDataControllerFn);
router.route("/library/create").post(libraryController.createDataControllerFn);
router.route("/library/update/:id").patch(libraryController.updateLibraryControllerFn);
router.route("/library/delete/:id").delete(libraryController.deleteLibraryControllerFn);
router.route("/library/setSortOrder").post(libraryController.setSortOrderControllerFn);

module.exports=router;