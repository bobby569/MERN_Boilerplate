# MERN Stack Development Boilerplate

MERN Boilerplate is a template for web development using Mongo, Express, React, Node.js
Stack. Simple template for Redux is also added to better centralize the data in the
_store_ for the project. Feel free to take the advantage of it and modify the code based
on your personal need.

Part of the template is based on a survey application, the idea of which is introduced
by Stephen Grider.

## Usage

### node and npm

This template has been tested on Node.js 8.9 and npm 5.5. The packages should be
available for download [here](https://nodejs.org/en/).

Run `$ node -v` and `$ npm -v` to check if installed successfully.

### Install dependencies

Clone the repo to your local and install the dependencies used for the boilerplate using
the command below. It will download the packages for both frontend and backend.

```
$ npm run pre-install
```

### Start the server

Run the follow command to start the server.

```
$ npm run dev
```

## Deploy to heroku

### Create Project under Heroku Personal Account

Login with the heroku credential using `$ heroku login` and do commit the project, run
the following command to publish to heroku server.

```
$ heroku create
$ git push heroku master
```

### Production Environment Setup

TBA

## Found any issue with the template?

Please submit the issue [here](https://github.com/bobby569/MERN_Boilerplate/issues). I
am looking forward to any feedback!

## License

MIT
