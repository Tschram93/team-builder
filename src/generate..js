// REMINDER: Use bootstrap classes 

// Create cards for each of the following: Manager, Engineer, Intern
// Help video for html javascript templates https://www.youtube.com/watch?v=NgF9-pdTDGs
// TODO: Templates each need a function

// TODO: Manager Card

// Template for Manager html
const createManagerCard = (manager) => {
    // Needs nested template literals 
    return `
    <div class="card bg-secondary bg-opacity-25" style="width: 18rem;" id="cards">
    <div class="card-body">
        <section class="bg-primary text-white pb-1">
            <h5 class="card-title">Alex</h5>
            <h6 class="card-subtitle mb-2">Engineer</h6>
        </section>
        <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
            <li class="bg-light border border-secondary mb-1">ID: 2</li>
            <li class="bg-light border border-secondary mb-1">Email: <a
                    href="mailto: Alex@fake.com">Alex@fake.com</a></li>
            <li class="bg-light border border-secondary"><a href='https://github.com/null/'>GitHub:</a>
            </li>
        </ul>
    </div>
    </div>
    `;
}

// TODO: Engineer Card

// Template for Engineer html
const createEngineerCard = (engineer) => {
    // Needs nested template literals 
    return `
<div class="card bg-secondary bg-opacity-25" style="width: 18rem;" id="cards">
<div class="card-body">
    <section class="bg-primary text-white pb-1">
        <h5 class="card-title">Alex</h5>
        <h6 class="card-subtitle mb-2">Engineer</h6>
    </section>
    <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
        <li class="bg-light border border-secondary mb-1">ID: 2</li>
        <li class="bg-light border border-secondary mb-1">Email: <a
                href="mailto: Alex@fake.com">Alex@fake.com</a></li>
        <li class="bg-light border border-secondary">Github: <a
                href='https://github.com/null/'>MrFancyPantz</a>
        </li>
    </ul>
</div>
</div>                            
`;
}

// TODO: Intern

// Template for Engineer html
const createInternCard = (Intern) => {
    // Needs nested template literals 
    return `
<div class="card bg-secondary bg-opacity-25" style="width: 18rem;" id="cards">
<div class="card-body">
    <section class="bg-primary text-white pb-1">
        <h5 class="card-title">John</h5>
        <h6 class="card-subtitle mb-2">Intern</h6>
    </section>
    <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
        <li class="bg-light border border-secondary mb-1">ID: 3</li>
        <li class="bg-light border border-secondary mb-1">Email: <a
                href="mailto: john@fakemail.com">john@fakemail.com</a></li>
        <li class="bg-light border border-secondary">School: <span class="school">ZUniversity</span>
        </li>
    </ul>
</div>
</div>
`;
}




let emptyArray = [];
// TODO: Needs to push data to the page
// Find way to match IF a position for function matches answer of inquirer job selection  
employeeContent = (data) => {
    for (let i = 0; i < data.length; i++) {
        let desiredJobSelected = data[i];
        const job = desiredJobSelected.jobSelection();

        // Function for each job position
        // TODO: MANAGER
        if (role === 'Manager') {
            let managerRole = createManagerCard(desiredJobSelected)
            emptyArray.push(managerRole)
        }
        // TODO: ENGINEER
        if (role === 'Engineer') {
            let engineerRole = createEngineerCard(desiredJobSelected)
            emptyArray.push(engineerRole)
        }

        // TODO: INTERN
        if (role === 'Intern') {
            let internRole = createInternCard(desiredJobSelected)
            emptyArray.push(internRole)
        }
    }
    const cardInfo = emptyArray.join('');
    const compileEmployees = (templateInjection);
}


// TODO: Generate the page as HTML file
// Need to insert/inject html template into a file
const templateInjection = (cardInfo) => {
    `
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team</title>
</head>
<header class="bg-danger text-white py-4">
    <h1 class="text-center">My Team</h1>
</header>

<body>
    <div class="container">


    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
</script>

</html>
`;
}

// export module
module.exports = generate;