class Github{

    constructor(){
        this.clientId = '7fe5235a8ef3aa98679f';
        this.clientSecret = 'f538c72eaab17bc027a73909212eb397fe92cf06';
        this.repoCount = 4;
    }

    async getRepo(repoName){

        const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${repoName}&client_id=${this.clientId}$client_secret=${this.clientSecret}&per_page=${this.repoCount}`);

        const repo = await repoResponse.json();

        return {repo: repo.items}
    }
}