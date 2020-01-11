const moment = require('moment');

module.exports.add =(a,b)=>a+b;

//Function to count IPs
module.exports.countIPs = (clicks) => {

    let count={};

    clicks.forEach((click) => {
        if(count[click.ip]){
            count[click.ip] += 1;
        }else{
            count[click.ip] = 1;
        }
    });

    return count;
}

//Function to generate final output
module.exports.generateOutput = (clicks,ipCount) => {

    let output = [];

    clicks.forEach((click) => {

        //date format is DD/MM/YYYY
        let h = moment(click.timestamp,"DD/MM/YYYY HH:mm:ss").hours();  
        
        //Exludes ips with count greater than 10
        if(ipCount[click.ip] > 10){     
            return;
        }
        
        if(output[h] === undefined){    
            output[h] = click;
            return;
        }

        /* Assuming input array is sorted by timestamp. So, click with lower timestamp is already present 
           in output array */
        if(output[h].ip === click.ip){  
            return;    
        }

        // If amoumnt ties for two different IPs, earlier one will be placed in output array
        if(output[h].amount < click.amount){
            output[h] = click;
        }
    });

    /* From "output" array we can get the most expensive click in a perticular click period. Index of the array 
       represents click period i.e. record at 0th index will be for the first click period (00:00:00 ​- 00:59:59 ) */

    return output.filter((click) => {
        return click !== undefined;
    });
}