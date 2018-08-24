const Driveways = require('../models/driveways')
var googleMapsClient = require('@google/maps').createClient({
    key: precess.env.GOOGLE_API
  });

module.exports = {
    const { address, city, state } = req.body;

    create(req, res) {
        if (req.file.path) {
            req.body.image = req.file.path
        }

        Driveways.findOne({ address: req.body.address }, (err, dbCheck) => {
            if (err) return res.status(500).json({ error: 'Internal Server Error'});

            if (!dbCheck) {
                googleMapsClient.geocode({ address: `${address}, ${city}, ${state}`}, function(err, response) {
                    if (err) return res.status(500).json({ error: 'Internal Server Error'});
                    console.log('Maps:', response)

                    Driveways.create(req.body, (err, newDriveway) => {
                        if (err) return res.status(500).json({ error: 'Internal Server Error'});
                        return res.status(200).json(newDriveway)
                    })
                  });
            } else {
                return res.status(400).json({
                    error: 'Address has an active posting.'
                  })
            }
        })
    }
}