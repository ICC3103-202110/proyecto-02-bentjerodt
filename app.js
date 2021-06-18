//We import some parte of the code and some modules 
const {inputSelectAction,inputLocation,inputDelete,inputUpdate} = require("./view");
const {printTable} = require("console-table-printer");

//The app is a loop that refresh the console, and call the functions to actualice the model and print them
async function app(state,updateModel,view){
    while(true){
        const {model, currentView} = state;
        const {title, table} = currentView;

        console.clear();
        console.log(title);

        if(table.length===0) null;
        else printTable(table);

        const {selectAction} = await inputSelectAction();

        if(selectAction === "Add city"){
            const {location} = await inputLocation();
            const updatedModel = await updateModel(selectAction,location,true,true,model);
            
            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if(selectAction === "Update city"){
            if(table.length === 0) null;
            else{
                const {update} = await inputUpdate(model);
                const updatedModel = await updateModel(selectAction,true,true,update,model);
                
                state = {
                    model: updatedModel,
                    currentView: view(updatedModel)
                }
            }
            
        }
        else if(selectAction === "Delete city"){
            if(table.length === 0) null;
            else{
                const {dele} = await inputDelete(model);
                const updatedModel = await updateModel(selectAction,true,dele,true,model);

                state = {
                    model: updatedModel,
                    currentView: view(updatedModel)
                }
            } 
        }
        else return 0; 
    }
}

module.exports = {
    app
}