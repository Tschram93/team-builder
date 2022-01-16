// REMINDER: Use bootstrap classes 


// Create cards for each of the following: Manager, Engineer, Intern
// Help video for html javascript templates https://www.youtube.com/watch?v=NgF9-pdTDGs
// TODO: Templates each need a function

// TODO: Manager Card

// Template for Manager html
const createManagerCard = (manager) => {
    // Needs nested template literals 
    return `
    <div class="card bg-secondary bg-opacity-25" style="width: 18rem;">
    <div class="card-body">
        <!-- Get the blue background top to take up entirety with no grey/whitespace -->
        <section class="bg-primary text-white pb-1">
            <h5 class="card-title"> ${manager.name} </h5>
            <h6 class="card-subtitle mb-2">Manager</h6>
        </section>
        <!-- Figure out how to remove the black solid circles (bullets) for the list -->
        <div>
            <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
                <li class="bg-light border border-secondary mb-1">ID: ${manager.id}</li>
                <li class="bg-light border border-secondary mb-1">Email: <a
                        href="mailto: ${manager.email}">${manager.email}</a></li>
                <li class="bg-light border border-secondary">Office Number: ${manager.officeNumber}
                </li>
            </ul>
        </div>
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
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2">Engineer</h6>
    </section>
    <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
        <li class="bg-light border border-secondary mb-1">ID: ${engineer.id}</li>
        <li class="bg-light border border-secondary mb-1">Email: <a
                href="mailto: ${engineer.email}">${engineer.email}</a></li>
        <li class="bg-light border border-secondary">Github: <a
                href='https://github.com/${engineer.github}/'>${engineer.github}</a>
        </li>
    </ul>
</div>
</div>                            
`;
}

// TODO: Intern

// Template for Engineer html
const createInternCard = (intern) => {
    // Needs nested template literals 
    return `
<div class="card bg-secondary bg-opacity-25" style="width: 18rem;" id="cards">
<div class="card-body">
    <section class="bg-primary text-white pb-1">
        <h5 class="card-title">${intern.id}</h5>
        <h6 class="card-subtitle mb-2">Intern</h6>
    </section>
    <ul class="list-unstyled lh-lg mt-4 d-flex flex-wrap justify-content-center">
        <li class="bg-light border border-secondary mb-1">ID: ${intern.id} id</li>
        <li class="bg-light border border-secondary mb-1">Email: <a
                href="mailto: ${intern.email}">${intern.email}</a></li>
        <li class="bg-light border border-secondary">School: ${intern.school}
        </li>
    </ul>
</div>
</div>
`;
}





// TODO: Needs to push data to the page
// Find way to match IF a position for function matches answer of inquirer job selection  
template = (data) => {
    console.log(data + 'template data');
    emptyArray = [];

    for (let i = 0; i < data.length; i++) {
        let desiredJobSelected = data[i];
        const job = desiredJobSelected.jobSelection();

        // Function for each job position
        // TODO: MANAGER
        if (job === 'Manager') {
            let managerRole = createManagerCard(desiredJobSelected)
            emptyArray.push(managerRole)
        }
        // TODO: ENGINEER
        if (job === 'Engineer') {
            let engineerRole = createEngineerCard(desiredJobSelected)
            emptyArray.push(engineerRole)
        }

        // TODO: INTERN
        if (job === 'Intern') {
            let internRole = createInternCard(desiredJobSelected)
            emptyArray.push(internRole)
        }
    }
    const cardInfo = emptyArray.join('');
    const compileEmployees = templateInjection(cardInfo);
    console.log(compileEmployees + 'compile');
    return compileEmployees;
}


// TODO: Generate the page as HTML file
// Need to insert/inject html template into a file
const templateInjection = (cardInfo) => {
    return `
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
        ${template}

    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
</script>

</html>
`;
}

// export module
module.exports = templateInjection;