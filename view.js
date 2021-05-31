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
    const {name,temp,max,min}=model;
    let data = [];
    for(let i;i<name.length;i++){
        data.push({"name":name,"temp":temp,"max":max,"min":min})
    }
    return data;
}

function inputSelectAction(){
    return inquirer.prompt([
        {
            name: "selectAction",
            type: "list",
            message: "Select action",
            choices: ["Add city","Update city","Delate city"]
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


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}


module.exports={
    view,
    inputSelectAction,
    inputLocation
}