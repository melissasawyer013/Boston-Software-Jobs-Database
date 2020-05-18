const express = require('express');
const body_parser = require('body-parser');
const mongodb = require('mongodb');
const PORT = 3000;
const app = express();
// Set the View Engine
app.set('view engine', 'ejs');

// Use body Parser in middle-ware
app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true} ));


// Declare any constants or variables here for Database
let db_handler;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'bsj';
const COLLECTION_NAME = 'companies'

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);

    // Step 4.
    // Here you should create a connection with your database
    // Upon success, print a message saying "Database Connected"
    // Upon success, you should also connect to the 'bsj' database.
    mongo_client = mongodb.MongoClient;
    mongo_client.connect(DB_URL, (err, db_client) => {
        if (err) {
            console.log(`There was an error connecting to the database. The error is ${err}`);
        } else {
            console.log(`Database Connected`);
            db_handler = db_client.db(DB_NAME);
        };
    });
});

// From here on, we can start writing our routes

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/jobs', (req, res) => {
    // In Step 7, we will fetch data from Database here and send to jobs.ejs page using an array called all_compaies
    db_handler.collection(COLLECTION_NAME).find({ }).toArray( (err, result) => {
        if (err) {
            console.log(`There was an error reading the database. The error is: ${err}`);
        } else {
            res.render('jobs', {
                'all_companies': result
            });
        };
    });
});

app.get('/view/:company_name', (req, res) => {
    const parameters = req.params;
    const companyName = parameters['company_name'];
    db_handler.collection(COLLECTION_NAME).find({name: companyName}).toArray((err, result) => {
        if (err) {
            res.send(`Company not found.`);
            console.log(err);
        } else {
            res.render('company', {
                'single_company': result[0]
            });
        };
    });
});

app.get('/updateCompany/:company_name', (req, res) => {
    const parameters = req.params;
    const companyName = parameters['company_name'];
    const nowHiring = {$set: { hiring: 'Yes' }};
    db_handler.collection(COLLECTION_NAME).updateOne( {name: companyName}, nowHiring, (err, result) => {
        if (err) {
            res.send(`Could not update the company hiring status.`);
            console.log(err);
        } else {
            res.redirect('/view/' + companyName);
        }
    });
});

app.get('/delete/:company_name', (req, res) => {
    const parameters = req.params;
    const companyName = parameters['company_name'];
    db_handler.collection(COLLECTION_NAME).deleteOne({name: companyName}, (err, result) => {
        if (err) {
            res.send(`Could not delete the company,`);
            console.log(err);
        } else {
            res.redirect('/jobs');
        }
    });
});

app.post('/add', (req, res) => {
    // This is where you will get a POST request on the '/add' route. 
    // Step 5. Add your logic here to add a new company to the database.
    const form_data = req.body;
    const company_id = parseInt(form_data['company_id']);
    const name = form_data['name'];
    const description = form_data['description'];
    const logo = form_data['logo'];

    const my_obj = {
        company_id: company_id,
        name: name,
        description: description,
        logo: logo,
    };
    console.log(my_obj)
    db_handler.collection(COLLECTION_NAME).insertOne(my_obj, (error, result) => {
        if (error) {
            console.log(`There was an error adding the document to the ${COLLECTION_NAME} collection. The error is ${error}`);
        } else {
            console.log(`Company Inserted`);
            res.redirect('/jobs')
        };
    });
});
