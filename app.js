const {inputSelectAction,inputLocation} = require("./view");
const {printTable} = require("console-table-printer");

async function app(state,update,view){
    const {model, currentView} = state;
    const {title, table} = currentView;

    console.clear()
    console.log(title);

    if(table.length === 0) console.log("No cities founded");
    else printTable(table);

    const {selectAction} = await inputSelectAction();
    if(selectAction === "Add city"){
        const {location} = await inputLocation();
    }
    else if(selectAction === "Update city"){

    }
    else if(selectAction === "Delate city"){
        
    }

    //printTable()
}

module.exports = {
    app
}