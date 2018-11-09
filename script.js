
// on window load, attach addEventListener
// send data using textbox value
window.onload = (() =>{
    document.getElementById('submitButton').addEventListener('click', ()=>{
        sendData(document.getElementById('userName').value);
    });

    document.getElementById('print').addEventListener('click', ()=>{
        printMeOut();
    });
});

//global firebase variable
db = firebase.database();


// function that sends Data to firebase realtime Database
var newDate;
function sendData(name){
    newDate = new Date();

    let ref = db.ref("/paterons/").push({
        name,
        date: newDate.toString(),
    }).then(()=>{
        console.log('data saved');
    });

}


// function that pulls all paterons into global data
async function pullData(){
    await general('/paterons/');
    return globalData;
}

// function to spit out paterons
async function printMeOut(){
    await pullData();

    document.getElementById('output').innerHTML = JSON.stringify(globalData);
}