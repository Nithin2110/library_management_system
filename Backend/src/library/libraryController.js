var libraryservice = require("./libraryService");

var getDataControllerFn = async(req,res)=>{
    var library = await libraryservice.getDataFromDbService();
    res.send(library);
}


var createDataControllerFn = async (req,res)=>{
    var status = await libraryservice.createLibraryDbService(req.body);
    if(status){
        res.send({"status":true,"message":"library created success"});
    } else {
        res.send({'status':false,"message":"Error in library creation"});
    }
}

var  updateLibraryControllerFn = async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    var result = await libraryservice.updateLibraryDbService(req.params.id,req.body);

    if (result){
        res.send({'status':true,'message':'library updated'});
    } else {
        res.send({'status':false,'message':'library update failed'});
    }
}

var deleteLibraryControllerFn = async(req,res)=>{
    console.log(req.params.id);
    var result = await libraryservice.removeLibraryDbService(req.params.id);
    if (result){
        res.send({'status':true,'message':'library removed'});
    } else{
        res.send({'status':false,'message':'delete failed'});
    }
}

var setSortOrderControllerFn = async(req,res)=>{
    var library = await libraryservice.setSortOrder(req.body);
    if (result){
        res.send({'status':true,'message':'library removed'});
    } else{
        res.send({'status':false,'message':'delete failed'});
    }
}

module.exports={getDataControllerFn,createDataControllerFn,updateLibraryControllerFn,deleteLibraryControllerFn,setSortOrderControllerFn}