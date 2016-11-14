# Eat-D-Burger
A full stack restaurant like application.

### Demo
[Check to see the demo](https://guarded-reef-93870.herokuapp.com/)

### Technologies used
* Server - Node.js, Express framework, Sequelize ORM
* Database - MySql
* Client - Express-handlebars
* Npm modules used - express, mysql, express-handlebars, body-parser, path, method-overide

### Design
MVC design pattern and Server side rendering are used. 

* Model - Generic ORM and Custom orm are created to model the database. Custom orm calls the generic orm.

* Views- Views are created using express-handlebars, HTML, CSS

* Controller - Requests coming to the server are handled by the controller/router which in turn communicates with model to get data and passes it to the views. 

### Challenges faced

* How to seperate the code into MVC pattern?
* How connect to the different pieces of code together?
* How to get it to work on heroku?

### Solution found

* Creating a MVC style directory structure helped seperate the code into MVC pattern.
* Visualizing which piece of code gets called first, how it calls the other functions and how the controls flows, helped to integrate it into a single application.
* Creating database on Jaws DB helped to get it get working on heroku.

### How it works

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

### Directory structure:
The directory structure for this application looks like this.
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

sequelize model:create --name burgers --attributes "burger_name:string,devoured:boolean"

#### Developed by Bhagya