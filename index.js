const {initModel} = require('./model');
const {updateModel} = require('./update');
const {view} = require('./view');
const {app} = require('./app');

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state,updateModel,view);