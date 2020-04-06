let companyImageArray = [];
let companyNameArray = [];
let companyBlurbArray = [];
let companyProfile = "";

function addCompany() {
    let companyImage = prompt("Copy and paste URL of company logo:");
    companyImageArray.push(companyImage);
    let companyName = prompt("What is the name of the company?");
    companyNameArray.push(companyName);
    let companyBlurb = prompt("Tell us a little about the company's mission.");
    companyBlurbArray.push(companyBlurb);
    companyProfile = "";
    for (let i = 0; i < companyImageArray.length; i++) {
        companyProfile += "<div class='img-thumbnail company-profile'><img src='" + companyImageArray[i] + "'alt='Company's Logo'><p>" + companyNameArray[i] + "</p><p>" + companyBlurbArray[i] + "</p></div>"
    }
    console.log(companyProfile);
    document.getElementById("companies-entered").innerHTML = companyProfile;
};