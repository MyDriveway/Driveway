# Driveway
Hello iterators.

Welcome to Driveway! The airbnb for driveways! This app allows people to rent out their
driveways to other people for a fee. We imagined this app would be popular in busy cities
or near popular events where traffic is congested and parking can be hard to find.

To build your webpack: 
```npm run webpack```

To run webpack and the server together:
```npm run dev```

Webpack is on 8080 and the server is on 3000.

You will need a .env file with a MONGO_URL
You will need a folder called clientENV in your root, inside of which you will need one file called api.js.
api.js contains a single line:
```export const API = "<your api key>";```

The following line is already included in the GoogleMapsContainer.jsx file:
```import { API } from '../../clientENV/api.js'```

The clientENV is already listed in the .gitignore.

Without the api key you will only have a developer version of google maps. Api keys are free
when you sign up.

Eh that's all I can think of atm. 