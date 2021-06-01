const {inputSelectAction,inputLocation,inputDelate} = require("./view");
const {printTable} = require("console-table-printer");

async function app(state,update,view){
    while(true){
        const {model, currentView} = state;
        const {title, table} = currentView;

       
        console.clear();
        console.log(title);

        if(table.length===0) null;
        else printTable(table);
        
        console.log(model.cities);

        //printTable(table);

        const {selectAction} = await inputSelectAction();

        if(selectAction === "Add city"){
            const {location} = await inputLocation();
            const updatedModel = update(selectAction,location,model);
            
            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if(selectAction === "Update city"){
            const updatedModel = update(selectAction,location,model);

            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
            
        }
        else if(selectAction === "Delate city"){
            const updatedModel = update(selectAction,true,model);
            if(table.length === 0) null;
            else{
                const {delate} = await inputDelate(model);
            }  

            state = {
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

    
    }

    
    
}

module.exports = {
    app
}