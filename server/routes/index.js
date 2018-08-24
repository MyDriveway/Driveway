const multer = require('multer')

const drivewayStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './driveway_img/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    }
  })
  const driveway = multer({
    storage: drivewayStorage,
    limits: {
      fileSize: 1024 * 1024 * 7.5
    }
  })

module.exports = app => {
    app.post('/createDriveway', driveway.single('photo'), drivewaysController.create)
}