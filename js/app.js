//Elements
const searchInput = document.querySelector('.searchGitHub');

// inits
const github =new Github();
const ui = new UI();

//EventListeners
searchInput.addEventListener('keyup', get);

// Funtions
function get(e) {
    
    const inputText = e.target.value;
    
    if(inputText !== ''){
        // Make an HTTP request to GitHub API
        github.getRepo(inputText).then(data => {

        ui.displayRepo(data.repo); 

        });

    }else{
        ui.repoElement.innerHTML = '';
    }
}
    

