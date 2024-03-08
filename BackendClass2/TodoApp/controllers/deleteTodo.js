
const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res)=>{

    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id:id});

        // when id not found.
        if(!todo){
            return res.status(404).json({
             success:false,
             message:'Data not found on this id',
            })
         };
         res.status(200).json({
            status:true,
            data:todo,
            message:'todo deleted successfully'
         })

    } catch (err) {
        console.error(err)
        console.log(err)
        res.status(404).json({
            status:false,
            error:err.message,
            message:'Internal server Error'
        })
    }
}