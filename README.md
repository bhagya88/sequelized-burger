# Eat-D-Burger
A full stack  CRUD application here customer can order burgers and drinks.

### Demo
[Check to see the demo](https://pacific-peak-90829.herokuapp.com)

### Technologies used
* Server - Node.js, Express framework, Sequelize ORM
* Database - MySql
* Client - Express-handlebars
* Npm modules used - express, mysql, express-handlebars, body-parser, path, method-overide

### Design
MVC design pattern and Server side rendering are used. 
Parent - Child association/ relationship is used.

* Model - sequelize models are created to model the database. 
* Views- Views are created using express-handlebars, HTML, CSS
* Controller - Requests coming to the server are handled by the controller/router which in turn communicates with model to get data and passes it to the views. 

### Challenges faced
* How store and retrieve data using sequelize models and associations?

### Solution found
* Reading documentation helped.

### How it works

* Sequelized burger is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Then the user gets can order the drink of his for each burger.

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


#### Developed by Bhagya