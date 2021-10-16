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

// TODO: Needs to push data to the page

// Function for each job position

// TODO: MANAGER

// TODO: ENGINEER

// TODO: INTERN



// TODO: Generate the page as HTML file


// export module
module.exports = generate;