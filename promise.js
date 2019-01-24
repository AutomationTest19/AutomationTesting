let cleanroom = new Promise(function(resolve,reject)

    {
        let isClean=true;
        if(isClean)
        {
            resolve('Clean');// function calling ( if it is possible then it will turn to then function)
        }
        else
        {
            reject('Not clean') //if reject then it will go to catch function
        }
    }
);

    let washroom =  new Promise(function(resolve,reject)
    {
        let isWashed = true;
        if(isWashed)
        {
            resolve('Washed');// function calling ( if it is possible then it will turn to then function)
        }
        else
        {
            reject('Not washed') //if reject then it will go to catch function
        }
    }
)

cleanroom.then(
    function(msg)
    {
        console.log('Resolve The room is == '+msg);
    },function(m)
    {
        console.log("Inside then -reject")
    }).catch(
        function(rejectmsg)
        {
            console.log("The room is "+rejectmsg);
        }
    )

cleanroom.then(function(msg)
{
    return washroom.then(function(msg11)
    {
        console.log("")
    })
})


console.log("hii 1 ");
console.log("hii 2");
console.log("Calling delay() function that returns a promise");
delayasyncing("3000").then(()=>{
    console.log("Hello promise is resolved");
},()=>
{
    console.log("promise is not resolved");
}).catch((error)=>
{
    console.log("Error");
})
console.log("No 4");
console.log("No 5");
// this function is returning a promise
function delayit(time)
{
    return new Promise((resolve,reject)=>
    {
        if(isNaN(time))
        {
            reject(new Error("Invalid data it must be a number"));
        }
        else{
            setTimeout(resolve,time);
        //     // setTimeout(()=>{resolve("bb")
        //     // console.log("Inside the time promise");
        // },time);
        //     //console.log("Inside the time promise");
        }
    });
}
async function delayasyncing(time)
{
    await delayit(time);

    await sayHii("HII");
    return; // if we are not returning any hing then by default it will wrap the  object into a promie
}

function sayHii(text)
{
    return new Promise((resolve,reject)=>
    {
        if(text === 'HII')
        {
            console.log("inside sayhii promise")
            resolve("Promise resolved");
        }
        else{
            reject(new Error("Error is there in hii "));
        }
    });
}