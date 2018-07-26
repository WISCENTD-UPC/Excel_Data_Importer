var eventConflictRegister = new Object();
var eventConflictRegister_total_extra;
var eventConflictRegister_total_unique;

function register_start(){
    eventConflictRegister = new Object();
    eventConflictRegister_total_unique = 0;
    eventConflictRegister_total_extra = 0;
}

function register_get(){
    return eventConflictRegister;
}

function register_add_pair(key, value){
    if (!(key in eventConflictRegister)) {
        eventConflictRegister[key] = new Object();
        eventConflictRegister[key][value] = 0;
        eventConflictRegister_total_unique++;
    } else {
        if (!(value in eventConflictRegister[key])) {
            eventConflictRegister[key][value] = 0;
            eventConflictRegister_total_unique++;
        } else {
            eventConflictRegister[key][value] ++;
            eventConflictRegister_total_extra++;
        }
    }
}

function register_get_total () {
    return eventConflictRegister_total_unique + eventConflictRegister_total_extra;
}

function register_get_total_unique () {
    return eventConflictRegister_total_unique;
}

function getSummaryAsTableTR () {

    if (register_get_total_unique()>0){
            
        var string = "<tr><td><b>key</b></td><td><b>value</b></td><td><b>Number of occurrences</b></td></tr>";
        
        for (var key in eventConflictRegister) {
            for (var value in eventConflictRegister[key]) {
                string += "<tr><td>"+key+"</td><td>"+value+"</td><td>"+eventConflictRegister[key][value]+"</td></tr>"
            
            }
        }

    } else {
        return "";
    }
    
    return string;

    
}