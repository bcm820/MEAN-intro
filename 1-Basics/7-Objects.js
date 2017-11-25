const students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let student of students) {
    console.log(
        `Name: ${student.name}, ` +
        `Cohort: ${student.cohort}`
    );
}

const users = {
    employees: [
        {'first_name' :  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

for(let table in users) {
    console.log(table.toUpperCase());
    let i = 1;
    for(let user of users[table]) {
        console.log(
            `${i} - ` +
            `${user.last_name.toUpperCase()}, ` +
            `${user.first_name.toUpperCase()} - ` +
            `${user.first_name.length + user.last_name.length}`
        );
        i++;
    }
}

// CD SOLUTION
for (const key in users) { // employees, managers
    console.log(key.toUpperCase());
    for (let i = 0; i < users[key].length; i++) {
        const num = i + 1;
        const fname = users[key][i].first_name; // etc. employees[0].first_name
        const lname = users[key][i].last_name;
        const length = fname.length + lname.length;
        console.log(`${num} - ${lname}, ${fname} - ${length}`);
    }
}