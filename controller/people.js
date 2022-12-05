let {people} = require('../data');

const getPeople =(req,res)=>{
    res.status(200).json({success:true, data:people})
}

const createPerson = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide the data'})
    }
    res.status(201).json({success:true, person:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide the data'})
    }
    res.status(201).send({success:true,data:[...people,name]})
     
}

const updatePerson = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name);
    
    //this is my logic for updating the data
    // let check = true;
    // const arr = people.map((data)=>{
    //     if(data.id == id){
    //         data.name = name;
    //         check = false;
    //         return res.status(201).send("data updated");
    //     }
    // })
    // if(!check)
    // res.status(400).send("Id not found")
    //freecodecamp logic here

    const person = people.find((person)=>person.id === Number(id));
    if(!person){
        res.status(400).json({success:false,msg:`There is no person with this id ${id}`})
    }
    const newpeople = people.map((person)=>{
        if(person.id === Number(id)){
             person.name = name;
        }
        return person;
    })
    res.status(200).json({success:"true", data:newpeople})
}

const deletePerson = (req,res)=>{
    const {id} = req.params;
    const name = people.find((person)=>person.id === Number(id));
    if(!name){
        return res.status(400).json({success:false, msg:`there is no name with this id ${id}`})
    } 
    const newpeople = people.filter((people)=>people.id !== Number(id))
    res.status(200).json({success:true,data:newpeople})
} 

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}