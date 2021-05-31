const {input} = require("./view");
const {printTable} = require("console-table-printer");

async function app(state,update,view){
    const {model, currentView} = state;
    const {title, table} = currentView;
    console.clear()
    console.log(title);

    const selectAction = await input();

    //printTable()
}

module.exports = {
    app
}