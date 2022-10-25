const fs = require('fs');
const { normalize } = require('path');


// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const object   = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const userData = fs.readFileSync(`${__dirname}/test_scenarious/normal/config.json`);

let normFr = JSON.parse(userData).numberOfFriends;
let normPhoto = JSON.parse(userData).numberOfPhotos;
let normVideo = JSON.parse(userData).numberOfVideos;

console.log(normFr);
 
    function addFriendNorm() {
        if (normFr < 150){
            object.addNewFriend();
            console.log(object.getAllFriends());   
          
        
        } 
            else {
            console.log("ne") ;
        }
        fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/friends.json`,JSON.stringify(normFr),
         err => {   if (err) {     return console.log(err);   } });
        // , err => {   if (err) {     return cosole.log(err)
    }
    document.getElementsByClassName("button1").onclick = function() {addFriendNorm()};
addFriendNorm();

    function removeFriendNorm(){
        if(normFr > 0){
            object.removeExistingFriend();
            console.log(object.getAllFriends());
        }
        else{
            console.log("ne moje da se triqt")
        }
        fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/friends.json`,JSON.stringify(normFr),
         err => {   if (err) {     return console.log(err);   } }); 
    }
removeFriendNorm();

object.getAllFriends();
console.log(object.getAllFriends());

function addPhotoNorm(){
    if (normPhoto < 150){
    object.addNewPhoto();
    console.log(object.getAllPhotos());  
    
}
    else {
    console.log("ne") ;
}
fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/photos.json`,JSON.stringify(normPhoto),
 err => {   if (err) {     return console.log(err);   } });
}
addPhotoNorm();

function removePhotoNorm(){
    if(normPhoto > 0){
        object.removeExistingPhoto();
        console.log(object.getAllPhotos());
    
    }
    else{
       return("ne moje da se triqt");
    }
    fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/photos.json`,JSON.stringify(normPhoto),
     err => {   if (err) {     return console.log(err);   } });
}
removePhotoNorm();

function allPhotoNorm(){
    object.getAllPhotos();
    console.log(object.getAllPhotos());
}
allPhotoNorm();



function addVideoNorm(){
    if (normVideo < 50){
    object.addNewVideo();
    console.log(object.getAllVideos());  
}
else {
    console.log("ne") ;
}
fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/videos.json`,JSON.stringify(normVideo),
 err => {   if (err) {     return console.log(err);   } });
}
addVideoNorm();

function removeVideoNorm(){
    if(normVideo > 0){
    object.removeExistingVideo();
    console.log(object.getAllVideos());
    }
    else    {
    console.log('nqma nalichni videa za triene');}
    fs.writeFileSync(`${__dirname}/test_scenarious/normal/a4fRctdWfn/videos.json`,JSON.stringify(normVideo),
     err => {   if (err) {     return console.log(err);   } });
}

removeVideoNorm();

function allVideoNorm(){
    object.getAllVideos();
    console.log(object.getAllVideos());
}

allVideoNorm();