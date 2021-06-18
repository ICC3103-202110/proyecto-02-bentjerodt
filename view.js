//We import some modules
const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");

//Function that returns the name of the app
function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'full',
                font: 'small'
            }
        )
    )
}

//Function returns a list of dictionarys that conteins the info of the tempertures
function getTable(model){
    const {cities,temp,max,min} = model;
    const data = [];

    let n=0;
    for(city in cities) n++;

    for(let i=0;i<n;i++){
        data.push({"City":cities[i],"Temp (°c)":temp[i],"Max (°c)":max[i],"Min (°c)":min[i]});
        
    }
    
    return data;
}

//Return the main action thah user select
function inputSelectAction(){
    return inquirer.prompt([
        {
            name: "selectAction",
            type: "list",
            message: "Select action:",
            choices: ["Add city","Update city","Delete city","Exit"]
        }
        
    ])
}

//return the name of the city that user writte in the console
function inputLocation(){
    return inquirer.prompt([
        {
            name: "location",
            type: "input",
            message: "Location?",
            default: "city"
        }
        
    ])
}

//return the name of the city that user choice in the console for delete
function inputDelete(model){
    return inquirer.prompt([
        {
            name: "dele",
            type: "list",
            message: "Delete city:",
            choices: model.cities
        }
    ])
}

//Return the name of the city that user choice in he console for update
function inputUpdate(model){
    return inquirer.prompt([
        {
            name: "update",
            type: "list",
            message: "Update city:",
            choices: model.cities
        }
    ])
}

//return the title and the table
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports={
    view,
    inputSelectAction,
    inputLocation,
    inputDelete,
    inputUpdate
}