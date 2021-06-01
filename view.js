const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');
const { printTable } = require('console-table-printer');


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

function getTable(model){
    let {cities,temp,max,min} = model;
    let data = [];

    for(let i=0;i<cities.length;i++){
        data.push({"name":cities[i],"temp":temp[i],"max":max[i],"min":min[i]});
        
    }
    
    return data;
}

function inputSelectAction(){
    return inquirer.prompt([
        {
            name: "selectAction",
            type: "list",
            message: "Select action:",
            choices: ["Add city","Update city","Delete city"]
        }
        
    ])
}

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
    inputDelete
}