// Jobs Array
jobs = [
    {
        title: 'Software Developer',
        company: 'Google',
        salary: 70000,
        location: 'Palo Alto, CA',
        description: ''
    },
    {
        title: 'Entry Level Software Developer',
        company: 'Tata Consultancy Services',
        salary: 700000,
        location: 'New Jersey',
        description: 'As an Entry-level Software Engineer, you will be trained to develop information systems by designing, developing, and installing software solutions to world class clients we serve. Campus hires begin their careers with TCS in the Initial Learning Program (ILP). A fully paid training program designed to provide you with the information and training necessary to succeed at TCS and excel on assignments with different customers. However, the learning does not stop there! TCS is committed to the continuous growth of its associates, in line with the core value of Learning & Sharing. We provide a Continuous Learning Program that spans technologies, domains, processes and soft skills. In addition, TCS associates are encouraged to undertake certifications and accreditations in a wide range of subject areas. With customers located across the US, TCS can offer great flexibility in work location, excellent career advancement, and a variety of opportunities. TCS mentoring, career development, and on-the-job training ensure a smooth transition into your professional life and orient you to our culture, values, vision, and mission.'
    },
    {
        title: 'Software Developer',
        company: 'SAIC',
        salary: 80000,
        location: 'Huntsville, AL',
        description: ''
    },
    {
        title: '',
        company: '',
        salary: 1,
        location: '',
        description: ''
    },
    {
        title: '',
        company: '',
        salary: 1,
        location: '',
        description: ''
    },
    {
        title: '',
        company: '',
        salary: 1,
        location: '',
        description: ''
    },
    {
        title: '',
        company: '',
        salary: 1,
        location: '',
        description: ''
    },
]

var business = 'north-india-restaurant-san-francisco'
var city = 'NYC'
var category = 'coffee'

var url = 'https://api.yelp.com/v3/businesses/search?location='+city+'&categories='+category;
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';

fetch(hostUrl+url, {
    headers : {
        'Authorization': 'Bearer BK_fUw1pcA-IgUqrycMskSWkpwUNoXrWWGTx9AO5IIzMTjeed_nikV7wdb_PZMGVwR7216XznMJrNwRLz3YVQDIm5QLV8Iap7wBknYLU6ahP7DaYvLmZGXob5LpUYXYx'
    }
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    var businessID = data.id;
    console.log(data);
});

