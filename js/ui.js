class UI {

    constructor() {
        this.repoElement = document.querySelector('#displayRepo');
    }

    displayRepo(repo) {
        this.repoElement.innerHTML = '';
        if(repo === undefined) return;

        repo.forEach(item => {
            
        this.repoElement.innerHTML += `
            <div class = "container">
                <ul class="collection">
                    <li class="collection-item avatar">
                        <img src="${item.owner.avatar_url}" alt="" class="circle">
                        <a href= "${item.html_url}" target = "_blank"><span class = "title">${item.name}</span></a>
                        <p>${item.description}</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i>${item.stargazers_count}</a>
                        <div id="marginTop" class = "row">
                            <div class="col s1"><span class="new badge">${item.language}</span></div>
                            <div class="col s6"><span class="badge">Updated: ${item.updated_at}</span></div>
                        </div>
                    </li>
                </ul>
            </div>            
            `;
        });
    }
}