class GitHub{
    constructor(){
        this.client_id = `a5f332444d6a07c281ca`;
        this.client_secret = `4f5d0241a8b12bcc798355979cecadfe2db74b5b`;
        this.repo_count = 5;
        this.report_sort = 'created : asc';
    }

    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secret}`);

        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.report_sort}&client_id=${this.client_id}&client_secrets=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}