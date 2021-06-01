const {inputSelectAction,inputLocation,inputDelete,inputUpdate} = require("./view");
const {printTable} = require("console-table-printer");

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
            const updatedModel = updateModel(selectAction,location,true,true,model);
            
            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if(selectAction === "Update city"){
            if(table.length === 0) null;
            else{
                const {update} = await inputUpdate(model);
                const updatedModel = updateModel(selectAction,true,true,update,model);
                
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
                const updatedModel = updateModel(selectAction,true,dele,true,model);

                state = {
                    model: updatedModel,
                    currentView: view(updatedModel)
                }
            }   
        }
    }
}

module.exports = {
    app
}