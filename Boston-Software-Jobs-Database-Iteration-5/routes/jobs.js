
// Company data stored in the COMPANIES object
const express = require('express');
const bodyParser = require('body-parser');
const jobsRouter = express.Router();

jobsRouter.use(bodyParser.json());
jobsRouter.use(bodyParser.urlencoded({extended: true}));

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

// This just returns the list of company names
// E.g It will return -->  ['Actifio', 'Agero', 'Akamai', 'AthenaHealth', 'LogMeIn', 'TripAdvisor', 'Wayfair']
function get_company_names_as_list() {
    return Object.keys(COMPANIES);
}

jobsRouter.get('/jobs', (request, response) => {
    let companyNames = get_company_names_as_list();
    response.render('jobs', {
        companyList: companyNames,
    });
});

