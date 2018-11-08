db = firebase.database();

var newDate;
function sendData(name){
    newDate = new Date();

    let ref = db.ref("/paterons/").push({
        name,
        date: newDate.toString(),
    });
}

async function pullData(){
    await general('/paterons/');
    return globalData;
}