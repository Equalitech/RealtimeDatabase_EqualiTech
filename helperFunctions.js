var globalData=[], meVals=[];
async function 
general(path){
    globalData=[], meVals=[];
    let ref = await db.ref(path).once('value').then( ((snapshot)=>{
        snapshot.forEach((el)=>{
            console.log('data', el);
            meVals.push(el.val());      
            globalData.push(el.val());
        });
    }));

    return new Promise((resolve)=>{
        resolve(meVals);
        console.log('meVals', meVals);
    });

}
//===========================

var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
async function pathLoop(path){
    // spits out next node in tree of paths

    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            // var tmp = el.val();
            arrayForPath.push(el.ref.path);
            arrayOfVal.push(el.val());
        });
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal);
    }).then(()=>{
        for (let i = 0; i < arrayOfVal.length; i++) {
            strungArray.push(arrayForPath[i].pieces_.join('/'));
        }

    });

    
    return new Promise((resolve)=>{
        resolve(arrayOfVal);
        console.log('strungArray', strungArray);
    });

}