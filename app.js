const {inputSelectAction,inputLocation,inputDelete} = require("./view");
const {printTable} = require("console-table-printer");

async function app(state,update,view){
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
            const updatedModel = update(selectAction,location,true,model);
            
            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if(selectAction === "Update city"){
            const updatedModel = update(selectAction,true,true,model);

            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
            
        }
        else if(selectAction === "Delete city"){
            

            if(table.length === 0) null;
            else{
                const {dele} = await inputDelete(model);
                const updatedModel = update(selectAction,true,dele,model);

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