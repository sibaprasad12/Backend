console.log('Before');

getUserMoviesAndSendEmail();

async function getUserMoviesAndSendEmail(){
    try{
        const customer = await getCustomer(1);
        const topMovies = await getMovies(customer.name);
        const email = await sendEmail(customer.emailId);
        console.log(email);
    }
    catch(err){
        console.log(err);
    }
}


function getCustomer(id){
    return new Promise( (resolve,reject) => {
        setTimeout( ()=>{
            console.log('get Customer...');
            resolve({id:id,userType:'isGold',name:'Sibaprasad',emailId:'customer@gmail.com'});
        },2000);
    });
} 

function getMovies(customer){
    return new Promise( (resolve,reject) => {
        setTimeout( ()=>{
            console.log('Top Movies are...'+customer);
            resolve(['Movies1','Movies2','Movies3']);
        },2000);
    });
}

function sendEmail(emailId){
    return new Promise( (resolve,reject) => {
        setTimeout( ()=>{
            console.log('Email Sent...to '+emailId);
        },2000);
    });
}


console.log('Before');