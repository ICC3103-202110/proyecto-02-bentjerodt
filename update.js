//Import some modules
const {getApiCityTemp} = require("./api")

//Add the city extracted from the api
async function addCity(location,model){
    /*const max = Math.floor(Math.random()*31); //entre 0 y 30
    const min = Math.floor(Math.random()*(max+1)); //entre 0 y max
    const t = min + Math.floor(Math.random()*(max-min+1)); //entre min y max

    model.cities.push(location);
    model.temp.push(t);
    model.max.push(max);
    model.min.push(min);*/

    const apiResult = await getApiCityTemp(location);
    if(apiResult=="City not found") return model;

    const temp = await apiResult.act;
    const temp_max = await apiResult.max;
    const temp_min = await apiResult.min;

    model.cities.push(location);
    model.temp.push(temp);
    model.max.push(temp_max);
    model.min.push(temp_min);

    return await model;
}

//Update the city 
async function updateCity(update,model){
    /*let max = Math.floor(Math.random()*31); //entre 0 y 30
    let min = Math.floor(Math.random()*(max+1)); //entre 0 y max
    let t = min + Math.floor(Math.random()*(max-min+1)); //entre min y max

    const index = model.cities.indexOf(update);

    model.temp[index] = t;
    model.min[index] = min;
    model.max[index] = max;*/

    const index = model.cities.indexOf(update);
    const apiResult = await getApiCityTemp(update);

    const temp = await apiResult.act;
    const temp_max = await apiResult.max;
    const temp_min = await apiResult.min;

    model.temp[index] = temp;
    model.max[index] = temp_max;
    model.min[index] = temp_min;

    return await model;

}
//Delete a city
function deleteCity(dele,model){
    let index = model.cities.indexOf(dele);

    model.cities.splice(index,1);
    model.temp.splice(index,1);
    model.max.splice(index,1);
    model.min.splice(index,1);
    return model;
}

//The main update function, calls specific function depending of the action
function updateModel(selectAction,location,dele,update,model){
    if(selectAction === "Add city"){
        return addCity(location,model);    
    }
    else if(selectAction === "Update city"){
        return updateCity(update,model);
    }
    else if(selectAction === "Delete city"){
        return deleteCity(dele,model);
    }
    else return -1;
}

module.exports={
    updateModel
}