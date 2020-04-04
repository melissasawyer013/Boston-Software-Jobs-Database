let companyInput;

function addCompany() {
    let companyInput = prompt("Copy and paste URL of company logo:");
    console.log(companyInput);
    if (companyInput === null || companyInput === undefined || companyInput == 0) {
        alert(`Enter in a company.`);
    } else {
        document.getElementById("companies-entered").innerHTML += `<img src="${companyInput}" alt=""> `;
    }
}

