// NOTES.
// * this is the js file serves as SERVER
// * any CONSOLE here, happen in terminal when request made
// * END terminal using "control + c", for updates in code

// 1. loading the express library
let express = require('express');

// 2. init object using express library
let app = express();

// "use" similar to "get"
// "express.static" look for folder named ("this name")
app.use('/', express.static('public'))

// * create a data object
// ultimately using our server to send json file when client request it
let foods = {
    datas: [
        {
            name: "cake",
            info: "with extra sugars"
        },
        {
            name: "pizza",
            info: "topping pinapple"
        },
        {
            name: "fries",
            info: "sweet potato"
        }
    ]
}

// app.get('/', (request, response)=> {
//     response.send("Hello");
// })

/*---------routes---------*/

// 4. set-up first route
app.get('/', (request, response) => {
    response.send("welcome");
    console.log("which one is console?"); // terminal is the console
})

// second route
app.get('/info', (request, response) => {
    response.send("this is the info page");
})


// data  route
app.get('/food', (request, response) => {
    console.log("a request was made for data")
    response.json(foods);
});


// request parameter route
//*parameter after : is set, can be any word
//*parameter is a key used later to get the input value
app.get('/food/:name', (request, response) => {
    //*"request.params" is an object, key is ":name", value is "pizza"in url
    console.log(request.params); 
    // console.log(request.params.name); // get value from client to server
    let user_name = request.params.name;
    let user_obj;
    for(let i=0; i<foods.datas.length; i++){
        if (user_name == foods.datas[i].name){
            user_obj = foods.datas[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        response.json(user_obj)
    }else{
        response.json({alert:"information not found"})
    }
    // response.send("request parameters test page")
});


/*---------set-up---------*/
// 3. listen to specific server
app.listen(3000, () => {
    console.log("app is listening at localhost:3000"); // console in terminal 
})