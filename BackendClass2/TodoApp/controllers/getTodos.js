const Todo = require('../models/Todo');

exports.getTodos = async(req,res)=>{

    try {
        const todos = await Todo.find({});
        res.status(200)
        .json(
            {
                success:true,
                data:todos,
                message:'entire todos data is fetched'
            }
        )
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500)
        .json(
            {
                success:false,
                error:error.message,
                message:'Internal Server Error!'
            }
        )
    }
}

exports.getTodoById = async(req,res)=>{
    try {
        // get todos item basis on Id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // when id not found.
        if(!todo){
           return res.status(404).json({
            success:false,
            message:'Data not found on this id',
           })
        };
        
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo data ${id} successfully fetched`
        })

    } catch (err) {
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            error: err.message,
            message:'Internal Server Error'
        })

    }
}