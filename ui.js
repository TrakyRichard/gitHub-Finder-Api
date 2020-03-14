class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    };
    // show profile in Ui
    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class ="row">
                    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                        <a href="${user.html_url}" target = "_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class='col-12 col-md-9 col-lg-9 col-xl-9'>
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>

                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>

                        <span class="badge badge-success">Followers: ${user.followers}</span>

                        <span class="badge badge-info">following : ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item mt-2">Company: ${user.company}</li>
                            <li class="list-group-item mt-2">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item mt-2">Location: ${user.location}</li>
                            <li class="list-group-item mt-2">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    };

    showRepos(repos){
        let output = "";

        repos.forEach(function(repos){
            output += `
                <div>
                    <div class = "row">
                        <div class="col-md-6">
                            <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                        </div>

                        <div class="col-md-6">
                        <span class="badge badge-primary">Starts : ${repos.stargazers_count}</span>

                        <span class="badge badge-secondary">Watched : ${repos.watchers_count}</span>

                        <span class="badge badge-success">Forks: ${repos.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        })
    
        document.getElementById('repos').innerHTML = output
    };
  // clear Alert

  clearAlert(){ 
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
        currentAlert.remove();
    }
}
    // clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
    // Show Alert message
    showAlert(message, className){
        // Clear any meaning Alert
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        // Add Class
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');

        // Get Search Boxe

        const search =  document.querySelector('.search');

        // Insert Alert
        container.insertBefore(div,search)

        setTimeout(() =>{
            this.clearAlert();
        }, 2000);
    };

    //TimeOut



  
}