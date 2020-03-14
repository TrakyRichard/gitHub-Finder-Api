
// init GitHub
const github = new GitHub;

// Init UI 
const ui = new UI;

// search Input 
const searchUser = document.getElementById('searchUser');

//addEve,tListener


searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
        //make Httpcall
        
        github.getUser(userText)
        .then(data =>{
            console.log(data);
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('L\'Utilisateur n\'existe pas', 'alert alert-danger');
            } else{
                // show profile

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }

    else{
        //clear profile
        ui.clearProfile();
    }
})