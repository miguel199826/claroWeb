const controller ={};

controller.list=(req,res)=>{
    req.getConnection((err , conn)=>{
        conn.query('select * from Registro',(err,cust)=>{
            if(err){
                res.json(err);
            };
        console.log(cust);
        res.render('index',{data:cust});
           
        });
    });
};

//console.log(req.body);
//res.send('works');
controller.registro=(req,res)=>{
    const data =req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO Registro set ?',[data],(err,cust)=>{
            //console.log(cust);
            res.send('works');
        });
    });
};

module.exports = controller;