const btn = document.getElementById('burger')
const navList = document.getElementById('nav-list')

btn.addEventListener('click', () => {
    navList.classList.toggle('nav-list-visible')
})


// scroll to offer screen after click the btn on the main page
const writeMeBtnScroll = document.getElementById("wrtm");
const showOfferScreen = document.getElementById("offer-screen")

function handleButtonClick() {
    showOfferScreen.scrollIntoView({block: "start", behavior: "smooth"});
}

writeMeBtnScroll.addEventListener('click', handleButtonClick);

// scroll to main page
const showMainPage = document.getElementById('greeting_screen')
const mainPageBtn = document.getElementById('main_page')

function handleButtonClickMain() {
    showMainPage.scrollIntoView({block: "end", behavior: "smooth"});
}

mainPageBtn.addEventListener('click', handleButtonClickMain);
// scroll to main page by logo
const logo = document.getElementById('logo')

function handleButtonClickMain() {
    showMainPage.scrollIntoView({block: "end", behavior: "smooth"});
}

logo.addEventListener('click', handleButtonClickMain);

// scroll to about-me page
const skillsScreen = document.getElementById('skills-screen')
const aboutAuthor = document.getElementById('about_author')

function handleButtonClickAuthor() {
    skillsScreen.scrollIntoView({block: "end", behavior: "smooth"});
}

aboutAuthor.addEventListener('click', handleButtonClickAuthor);



// scroll to about-work page
const workScreen = document.getElementById('about_work')
const process = document.getElementById('process')

function handleButtonClickProcess() {
    workScreen.scrollIntoView({block: "end", behavior: "smooth"});
}

process.addEventListener('click', handleButtonClickProcess);


// scroll to about-me page
const projectsScreen = document.getElementById('projects')
const projectsBtn = document.getElementById('projects-btn')

function handleButtonClickProjects() {
    projectsScreen.scrollIntoView({block: "center", behavior: "smooth"});
}

projectsBtn.addEventListener('click', handleButtonClickProjects);
// scroll to footer contact 

const footerScreen = document.getElementById('footer')
const contactBtn = document.getElementById('contact')

function handleButtonClickFooter() {
    footerScreen.scrollIntoView({block: "center", behavior: "smooth"});
}

contactBtn.addEventListener('click', handleButtonClickFooter);


