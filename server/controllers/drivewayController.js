const Driveways = require('../models/driveways')
var googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_API
  });

module.exports = {

    create(req, res) {
        const { address, city, state } = req.body;
        if (req.file !== undefined) {
            req.body.image = req.file.path
        }
        Driveways.findOne({ address: req.body.address }, (err, dbCheck) => {
            if (err) return res.status(500).json({ error: '1 Internal Server Error'});

            if (!dbCheck) {
                req.body.city = city.toLowerCase();
                req.body.state = state.toLowerCase();
                googleMapsClient.geocode({ address: `${address}, ${city}, ${state}`}, function(err, response) {
                    if (err) return res.status(500).json({ error: '2 Internal Server Error'});
                    const locationObject = response.json.results[0].geometry.location
                    req.body.geometry = {coordinates: [locationObject.lng, locationObject.lat]}
                    const newDriveway = new Driveways(req.body)
                    newDriveway.save(function (err) {
                        if (err) return res.status(500).json({ error: err});
                        return res.status(200).json(newDriveway)
                    })
                  });
            } else {
                return res.status(400).json({
                    error: 'Address has an active posting.'
                  })
            }
        })
    },

    search(req, res) {
        Driveways.aggregate(
            [
              {
                $geoNear: {
                  near: {
                    type: 'Point',
                    coordinates: [parseFloat(req.params.lng), parseFloat(req.params.lat)]
                  },
                  distanceField: 'dist',
                  includeLocs: 'dist.location',
                  maxDistance: parseFloat(8050),
                  spherical: true,
                }
              }
            ], (err, result) => {
                console.log('result here', result);
              if(err) return res.status(500).send(err);
      
              res.send(JSON.stringify(result));
            }
        )
    }
}