const fs = require('fs');
const { normalize } = require('path');


// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const object = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/configv.json`);
const userData = fs.readFileSync(`${__dirname}/test_scenarious/vip/configv.json`);
let vipFr = JSON.parse(userData).numberOfFriends;
let vipPhoto = JSON.parse(userData).numberOfPhotos;
let vipVideo = JSON.parse(userData).numberOfVideos;

console.log(vipFr);
console.log(vipPhoto);
console.log(vipVideo);


    function addFriendVip() {
        object.addNewFriendVip();
        console.log(object.getAllFriends());   
    }
    fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/friends.json`,JSON.stringify(vipFr),
        err => {   if (err) {     return console.log(err);   } });

addFriendVip();

    function removeFriend(){
        if(vipFr > 0){
            object.removeExistingFriend();
            console.log(object.getAllFriends());
        }
        else{
            console.log("ne moje da se triqt")
        }
        fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/friends.json`,JSON.stringify(vipFr),
        err => {   if (err) {     return console.log(err);   } });
    }
removeFriend();

object.getAllFriends();
console.log(object.getAllFriends());

function addPhotoVip(){
    object.addNewPhoto();
    console.log(object.getAllPhotos());  

    fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/photos.json`,JSON.stringify(vipPhoto),
        err => {   if (err) {     return console.log(err);   } });
}
addPhotoVip();

function removePhotoVip(){
    if(vipPhoto > 0){
        object.removeExistingPhoto();
        console.log(object.getAllPhotos());
    
    }
    else{
       return("ne moje da se triqt");
    }

    fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/photos.json`,JSON.stringify(vipPhoto),
        err => {   if (err) {     return console.log(err);   } });
}
removePhotoVip();

function allPhotoVip(){
    object.getAllPhotos();
    console.log(object.getAllPhotos());
}
allPhotoVip();



function addVideoVip(){
    object.addNewVideo();
    console.log(object.getAllVideos());  

    fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/videos.json`,JSON.stringify(vipVideo),
        err => {   if (err) {     return console.log(err);   } });
}
addVideoVip();

function removeVideoVip(){
    if(vipVideo > 0){
    object.removeExistingVideo();
    console.log(object.getAllVideos());
    }
    else    {
    console.log('nqma nalichni videa za triene');
            }

    fs.writeFileSync(`${__dirname}/test_scenarious/vip/Niki/videos.json`,JSON.stringify(vipVideo),
        err => {   if (err) {     return console.log(err);   } });
}

removeVideoVip();

function allVideoVip(){
    object.getAllVideos();
    console.log(object.getAllVideos());
}
allVideoVip();