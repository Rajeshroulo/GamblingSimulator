class GamblingSimulation {
    stake=100;
    bet=1;

    outcome()
    {
        var random = Math.floor(Math.random() * 2);
        if(random==1)
        {
            console.log("Win the match");
            this.stake=this.stake+this.bet;
            console.log(this.stake);
        }
        else
        {
            console.log("Lost the match");
            this.stake=this.stake-this.bet;
            console.log(this.stake);
        }
    }
    
    readvalues() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return readline;
    }

    enterStakeandBetValue(read) {
        let that=this;
        this.read=read;
        read.question("Enter stake value :", function (stake) {
            read.question("Enter bet value :", function (bet) {
                that.enterTrialsandGoalValue(read);
                console.log("the stake is:"+stake+" ,bet is:"+bet);
            });

         });
    }

    enterTrialsandGoalValue(read) {

        read.question("Enter trials  :", function (trials) {
            read.question("Enter goal :", function (goal) {
                console.log("the trials is:"+trials+" ,goal is:"+goal);
                read.close();
            });

         });
    }
            
}

let gambler = new GamblingSimulation();
gambler.outcome();

