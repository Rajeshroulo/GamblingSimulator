class GamblingSimulation {

    readvalues() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return readline;
    }

    enterStakeandBetValue(read) {

        read.question("Enter stake value :", function (stake) {
            read.question("Enter bet value :", function (bet) {
                console.log("the stake is:"+stake+" ,bet is:"+bet);
                read.close();
            });

         });
    }
            
}

let gambler = new GamblingSimulation();
var read = gambler.readvalues();
gambler.enterStakeandBetValue(read);

