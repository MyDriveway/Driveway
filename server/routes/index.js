const multer = require('multer');
const DrivewaysController = require('../controller/driveways_controller')

const drivewayImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    }
  })
  const drivewayImage = multer({
    storage: drivewayImageStorage,
    limits: {
      fileSize: 1024 * 1024 * 12
    }
  })

module.exports = app => {
  app.post('/createDriveway', drivewayImage.single('photo'), DrivewaysController.create)
  app.get('/api/search/:lng/:lat', DrivewaysController.search)

}