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

function delateCity(){

}


function update(selectAction,location,model){
    if(selectAction === "Add city"){
        return addCity(location,model);
        
    }
    else if(selectAction === "Update city"){

    }
    else if(selectAction === "Delate city"){

    }
    else return 1;
}

module.exports={
    update
}