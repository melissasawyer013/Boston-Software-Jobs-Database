// Create array of company objects
let companies = [{
	name: 'LogMeIn',
	logo: 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
	blurb: "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world's top 10 SaaS companies with a leadership position in every one of our markets."
}, {
	name: 'TripAdvisor',
	logo: 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
	blurb: 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.'
}, {
	name: 'Agero',
	logo: 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
	blurb: "Agero's mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions."
}];


// Create object constructor for new company
function Company(name, logo, blurb) {
	this.name = name;
	this.logo = logo;
	this.blurb = blurb;
}


// Listen for user click on "DisplayAll" button
	// Loop through array and display each one on Companies page
	// Display long string of company names, logos and descriptions on page
document.querySelector('#displayAll').addEventListener('click', displayAll);

function displayAll(){
let companiesEnteredDiv = document.querySelector('#companies-entered');
companiesEnteredDiv.innerHTML = '';
	for ( let i=0; i<companies.length; i++) {
		let newDiv = document.createElement('div');
		newDiv.className = 'img-thumbnail company-profile';
		companiesEnteredDiv = document.querySelector('#companies-entered');

		companiesEnteredDiv.appendChild(newDiv);

		let newLogo = document.createElement('img');
		newLogo.src = companies[i].logo;
		newDiv.appendChild(newLogo);

		let newName = document.createElement('p');
		newName.textContent = companies[i].name;
		newName.className = 'displayedCompNames';
		newDiv.appendChild(newName);

		let newBlurb = document.createElement('p');
		newBlurb.textContent = companies[i].blurb;
		newDiv.appendChild(newBlurb);
	};
}


// Listen for user click on "Add company" button
	// Get company info from user
	// Create a new company object
	// Add the new object to the companies array
	// Display all companies
document.querySelector('#addCompany').addEventListener('click', addCompany);

function addCompany(){
	let compName = document.querySelector('#compName').value;
	let compLogo = document.querySelector('#compLogo').value;
	let compBlurb = document.querySelector('#compBlurb').value;
	let newObject = new Company(compName, compLogo, compBlurb);
	companies.push(newObject);
	displayAll();
}
	

// Listen for user click on "Clear" button
	// Set value of text inputs to empty strings
document.querySelector('#clearBtn').addEventListener('click', clearFields);

function clearFields() {
	let compName = document.querySelector('#compName');
	let compLogo = document.querySelector('#compLogo');
	let compBlurb = document.querySelector('#compBlurb');
	compName.value = '';
	compLogo.value = '';
	compBlurb.value = '';
};


// BONUS: Listen for user click on "Alphabetize" button
// function compare(a, b) { 
	// create new variables to isolate the name keys
	// compare two companies from the array; if a is greater (i.e. closer to end of alphabet), comparison variable = 1, if b is greater, comparison = -1
// }
document.querySelector('#alphabetize').addEventListener('click', alphabetizeNames);

function alphabetizeNames() {
	companies.sort((a, b) => a.name.localeCompare(b.name))
	displayAll();
}

// I got help from this thread: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
