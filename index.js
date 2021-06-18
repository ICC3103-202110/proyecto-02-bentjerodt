//We import some parte of the code and some modules 
const {initModel} = require("./model");
const {updateModel} = require("./update");
const {view} = require("./view");
const {app} = require("./app");

//The state contains the model (our tempertures) and the function view, that print these variables
const state = {
    model: initModel,
    currentView: view(initModel)
}

//we execute the app
app(state,updateModel,view);