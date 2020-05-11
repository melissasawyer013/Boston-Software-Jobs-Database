/*
    This file is the entry point.
    Here we have already created a basic server for you. 
    You will need to add appropriate URL paths (endpoints) to handle browser requests.
*/


// Use the mental framework of "CRUD" to make routes to the following sections:
    // Home page

    // Read all companies (write this route first, but it should appear after Create when you're done)

    // Create new company details page

    // Update a company

    // Delete a company

    // Don't forget to add forms to the correct pages in order to create a new company and to update a company.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const companyRouter = require('./routes/company');
const jobsRouter = require('./routes/jobs');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const COMPANIES = {
    'Actifio' : {
        'name': 'Actifio', 
        'description': 'Actifio enterprise cloud data management enables thousands of businesses around the world to deliver their data just as they deliver their applications and infrastructure… as a service available instantly, anywhere.',
        'logo': 'https://www.tcv.com/wp-content/uploads/2016/12/TCV_0054_actifio.png',
    },
    'Agero' : {
        'name': 'Agero', 
        'description': 'Agero’s mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions.',
        'logo': 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
    },
    'Akamai' : {
        'name': 'Akamai', 
        'description': 'Akamai is the global leader in Content Delivery Network (CDN) services, making the Internet fast, reliable and secure for its customers.',
        'logo': 'https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png',
    },
    'AthenaHealth' : {
        'name': 'AthenaHealth', 
        'description': 'AthenaHealth partners with hospital and ambulatory customers to drive clinical and financial results. We offer medical record, revenue cycle, patient engagement, care coordination, and population health services.',
        'logo': 'https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg',
    },
    'LogMeIn' : {
        'name': 'LogMeIn', 
        'description': 'Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world’s top 10 SaaS companies with a leadership position in every one of our markets.',
        'logo': 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
    },
    'TripAdvisor' : {
        'name': 'TripAdvisor', 
        'description': 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.',
        'logo': 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
    },
    'Wayfair' : {
        'name': 'Wayfair', 
        'description': 'Wayfair is one of the world\'s largest online destinations for the home.',
        'logo': 'http://www.codesquad-test.org/assets/img/wayfair_logo.png',
    },
}

//Homepage route
app.get('/', (request, response) => {
    let headerText = `Welcome to Boston Software Jobs`;
    response.render('index', {
        header: headerText
    });
});

app.use('/company', companyRouter);
app.use('/jobs', jobsRouter);

// Server is started on the given PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});



