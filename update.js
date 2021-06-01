function addCity(location,model){
    let max = Math.floor(Math.random()*31); //entre 0 y 30
    let min = Math.floor(Math.random()*(max+1)); //entre 0 y max
    let t = min + Math.floor(Math.random()*(max-min+1)); //entre min y max

    model.cities.push(location);
    model.temp.push(t);
    model.max.push(max);
    model.min.push(min);
    return model;
}

function updateCity(update,model){
    let max = Math.floor(Math.random()*31); //entre 0 y 30
    let min = Math.floor(Math.random()*(max+1)); //entre 0 y max
    let t = min + Math.floor(Math.random()*(max-min+1)); //entre min y max

    let index = model.cities.indexOf(update);

    model.temp[index] = t;
    model.min[index] = min;
    model.max[index] = max;
    return model;

}

function deleteCity(dele,model){
    let index = model.cities.indexOf(dele);

    model.cities.splice(index,1);
    model.temp.splice(index,1);
    model.max.splice(index,1);
    model.min.splice(index,1);
    return model;
}

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