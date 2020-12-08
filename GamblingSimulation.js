/**
 * Class Declaration
 * 
 * @class  GamblingSimulation
 * @description  Computing Gambling Simulation 
 *
 */

class GamblingSimulation {
    wins = 0;
    loss = 0;
    readline;

    /**
     * 
     * @method outcome
     * to check the wins and loss of the game 
     */
    outcome(stake,bet,goal,trials) {
        var bets = 0;
        this.money = stake;
        for (var t = 0; t < trials; t++) {
            while (this.money > 0 && this.money < goal) {
                bets++;
                var random = Math.floor(Math.random() * 2);
                if (random == 1) {
                    this.money = parseInt(this.money) + parseInt(bet);
                }
                else {
                    this.money = parseInt(this.money) - parseInt(bet);
                }

            }

            if (this.money == goal) {
                this.wins++;
            }

            else {
                this.loss++;
            }
        }

        console.log(this.wins + " matches won out of " + trials);
        console.log("final money player have :" + this.money);
    }

    /**
     * @constructor
     * @description Declaring readline object
     */
    constructor() {
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    /**
     * @method playGame
     * calling the promise in the function
     */

    playGame() {     
      this.stakeValue()
      .then((stake)=>{
        console.log(stake);
        return this.betValue();
      })
      .then((bet)=>{
        console.log(bet);
        return this.goalValue();
      })
      .then((goal)=>{
        console.log(goal);
        return this.trialValue();
      })
      .then((trials)=>{
        console.log(trials);
        return this.outcome(this.stake,this.bet,this.goal,this.trials);
      })

      .catch(error => { 
        console.error("please enter proper values");
      });   
    }

    stakeValue() {
        let that=this;
        return new Promise((resolve, reject) => {
            that.readline.question("Enter stake value :", (stake) => {
                if(typeof stake === undefined || isNaN(stake) ){
                    return reject("Please enter valid stake")
                }
                else{
                    this.stake=stake;
                    return resolve(stake);
                }
            });
        });
    }

    betValue() {
        let that=this;
        return new Promise((resolve, reject) => {
            that.readline.question("Enter bet value :", (bet) => {
                if(typeof bet === undefined || isNaN(bet) ){
                    return reject("Please enter valid bet")
                }
                else{
                    this.bet=bet;
                    return resolve(bet);
                }
            });
        });      
    }

    goalValue(){
        let that=this;
        return new Promise((resolve, reject) => {
            that.readline.question("Enter goal value :", (goal) => {
                if(typeof goal === undefined || isNaN(goal) ){
                    return reject("Please enter valid goal")
                }
                else{
                    this.goal=goal;
                    return resolve(goal);
                }
            });
        });

    }

    trialValue(){
        let that=this;
        return new Promise((resolve, reject) => {
            that.readline.question("Enter trials value :", (trials) => {
                if(typeof trials === undefined || isNaN(trials) ){
                    return reject("Please enter valid trials")
                }
                else{
                    this.trials=trials;
                    return resolve(trials);
                }
            });
        });
    }                
}

let gambler = new GamblingSimulation();
gambler.playGame();
