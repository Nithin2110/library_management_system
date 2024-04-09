const { Promise } = require('mongoose');
var libraryModel = require('./libraryModel');

var order = 0;

 module.exports.getDataFromDbService=()=>{
    return new Promise(function checkURL(resolve,reject){
        if( order==0){
            libraryModel.find({},function returnData(error,result){

                if (error){
                    reject(false);
                }else{
                    resolve(result);
                }
            });
        }
        else {
            libraryModel.find({},function returnData(error,result){

                if (error){
                    reject(false);
                }else{
                    resolve(result);
                }
            }).sort({Name : order});
        }
    });
 }

 module.exports.getOneDataFromDbService=(id)=>{
    return new Promise(function checkURL(resolve,reject){

        libraryModel.findById(id,function returnData(error,result){
            if(error){
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
 }

 module.exports.createLibraryDbService=(libraryDetails)=>{
    return new Promise(function myFn(resolve,reject){

        var libraryModelData = new libraryModel();
        libraryModelData.Name=libraryDetails.Name;
        libraryModelData.Author=libraryDetails.Author;
        libraryModelData.Genre=libraryDetails.Genre;
        libraryModelData.Edition=libraryDetails.Edition;

        libraryModelData.save(function resultHandle(error,result){
            if(error){
                reject(false);
            }
            else{
                resolve(true);
            }
        });
    });
 }

 module.exports.updateLibraryDbService=(id,libraryDetails)=>{
    console.log(libraryDetails);
    return new Promise(function myFn(resolve,reject){
        libraryModel.findByIdAndUpdate(id,libraryDetails,function returnData(error,result){
            if(error){
                reject(false);
            }
            else{
                resolve(result);
            }
        });
    });
 }

 module.exports.removeLibraryDbService = (id)=>{
    return new Promise(function myFn(resolve,reject){
        libraryModel.findByIdAndDelete(id,function returnData(error,result){
            if(error){
                reject(false);
            } else{
                resolve(result);
            }
        });
    }); 

 }

 module.exports.setSortOrder = (sortOrder)=>{
    return new Promise(function checkURL(resolve,reject){
        console.log(sortOrder);
        order=sortOrder.order;
        console.log(order);
        
    });
 }
