// functions ที่ทำงานตาม route
exports.get = (req, res)=>{
    res.send("Get customers here");
  }

exports.getById = (req, res)=>{
    res.send("Get customers " + req.params.id);
  }

exports.getByName = (req, res)=>{
    res.send("Get customers " + req.params.name);
  }

exports.create = (req, res)=>{
    res.send("Create a customers");
}

exports.edit = (req, res)=>{
    res.send("Edit customer id: " +req.params.id);
}

exports.patchs = (req, res)=>{
    res.send("Patch customer id: " +req.params.id);
}

exports.deletes = (req, res)=>{
    res.send("Delete customer id: " +req.params.id);
}