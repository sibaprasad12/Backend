console.log('Before');
 
// we can simplify the code abve
// getUser(1).then(user => getRepositories(user))
// .then(repo => getCommits(repo))
// .then(commits => console.log('Commits is '+commits));

// async and await approach using await and async
async function displayCommits(){
    try{
        const user  = await getUser(1);
        const repos  = await getRepositories(user.gitHubUsername);
        const commits  = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error is '+err);
    }
}

displayCommits();

console.log('After');
function getUser(id) {
    return new Promise((resolve,reject) =>{
        // kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
          }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve,reject) =>{
        // kick off some async work
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve(['repo1', 'repo2', 'repo3']);
            reject('not able to get repos');
          }, 2000);
    });
}

function getCommits(repo) {

    return new Promise((resolve,reject) =>{
        // kick off some async work
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);
    }); 
}