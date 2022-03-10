const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.get('/', projectController.getAllProject);
router.post('/', projectController.createProject);
router.post('/multiple-upload', uploadController.multipleUpload);
router.post('/:id', projectController.updateOne);
router.get('/:id', projectController.getOneProject);
router.delete('/:id', projectController.deleteProject)
router.delete('/removeImage/:name', projectController.removeImage);
module.exports = router;
