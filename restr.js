const fs = require('fs');
const { normalize } = require('path');


// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const object = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/configr.json`);
const userData = fs.readFileSync(`${__dirname}/test_scenarious/restricted/configr.json`);
let restrFr = JSON.parse(userData).numberOfFriends;

console.log(restrFr);

 
    function addFriendRestr() {
        if (restrFr < 50){
            object.addNewFriend();
            console.log(object.getAllFriends());   
        } 
            else {
            console.log("ne") ;
        }

        fs.writeFileSync(`${__dirname}/test_scenarious/restricted/Ivan/friends.json`,JSON.stringify(restrFr),
         err => {   if (err) {     return console.log(err);   } });
    }
addFriendRestr();

    function removeFriendrestr(){
        if(restrFr > 0){
            object.removeExistingFriend();
            console.log(object.getAllFriends());
        }
        else{
            console.log("ne moje da se triqt")
        }
        fs.writeFileSync(`${__dirname}/test_scenarious/restricted/Ivan/friends.json`,JSON.stringify(restrFr),
         err => {   if (err) {     return console.log(err);   } });
    }
removeFriendrestr();

object.getAllFriends();
console.log(object.getAllFriends());