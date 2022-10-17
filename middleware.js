const middleware=function(req,res,next){
    console.log("Yeni bir istek geldi.");
    next();
  }
  
  const middlewareLog=function(req,res,next){
    console.log("POST isteği için istek gönderildi.");
    next();
  }

  module.exports={middleware,middlewareLog}