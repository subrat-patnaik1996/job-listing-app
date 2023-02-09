var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("joblisting");
            database.collection("tblusers").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.post("/registeruser",(req, res)=>{
    var userdetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Mobile: req.body.Mobile,
        Subscribed:(req.body.Subscribed=="true")?true:false
    }
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("joblisting");
            database.collection("tblusers").insertOne(userdetails,(err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/getusers");
                }
            })
        }
    })
});
app.get("/getemployer", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("joblisting");
            database.collection("tblemployer").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.post("/postjob",(req, res)=>{
    var userdetails = {
       
        id:parseInt(req.body.id),
        company:req.body.company,
        position:req.body.position,
        role:req.body.role,
        level:req.body.level,
        postedAt:req.body.postedAt,
        contract:req.body.contract,
        location:req.body.location,
        jobDescription:req.body.jobDescription,

    }
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("joblisting");
            database.collection("tbljobs").insertOne(userdetails,(err, result)=>{
                if(!err){
                    console.log("Record Inserted");
                    res.redirect("/getusers");
                }
            })
        }
    })
});
app.get("/getjobs", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("joblisting");
            database.collection("tbljobs").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.get("/getjobs/:id", (req, res)=> {
    let jobId = parseInt(req.params.id);

    mongoClient.connect(connectionString, (err, clientObj)=> {
        if(!err) {
            var database = clientObj.db("joblisting");
            database.collection("tbljobs").find({id:jobId}).toArray((err,documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.listen(4000);
console.log("Server Started : http://127.0.0.1:4000");