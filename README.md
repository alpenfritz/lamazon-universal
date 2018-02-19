# Lamazon

This app was created during my time as a student at Code Chrysalis.

It uses Node, React, Redux, Express, Mongodb and webpack.

## Key Features

* Bookstore with shopping cart functionality
* Items in shopping cart get stored persistently in the database, even after leaving the page
* Styling of react components mainly provided by react-bootstrap, including a carousel component
* Admin page that enables saving and deleting books from the database
* Server-side rendering
* Deployed on [Heroku](https://lamazon.herokuapp.com/) and [AWS Elastic Bean](http://lamazonuniversal.hmqtpfjzkh.ap-northeast-1.elasticbeanstalk.com/)

## Requirements

* MongoDB set up and run locally

## Setup

```
# Clone github repository and goto app folder
$ git clone https://github.com/alpenfritz/lamazon-universal.git
$ cd lamazon-universal

# Install node dependencies
$ yarn install

# Run the app
$ yarn start-local

# Open browser and goto http://localhost:3000/
```

## Future Plans

* Store orders in the database
* Attach photos to book items
* Admin login

## Resources

* https://reactjs.org/
* https://redux.js.org/
* https://react-bootstrap.github.io/
* https://www.mongodb.com/
* http://mongoosejs.com/
* https://www.udemy.com
* https://expressjs.com/
* https://reacttraining.com/react-router/
* https://github.com/axios/axios
* https://github.com/expressjs/session
* https://github.com/evgenyrodionov/redux-logger