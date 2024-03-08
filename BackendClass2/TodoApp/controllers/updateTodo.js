const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
   
     try {
         //const id= req.params;
         // another way for finding Id.

     const {id} = req.params;
     const{title, description} = req.body;
     const todo = await Todo.findByIdAndUpdate
     (
        {_id:id},
        {title, description, updatedAt: Date.now()}
     );

     res.status(200).json({
        success:true,
        data:todo,
        message:'Updated Successfully'
     });
     if(!todo){
        return res.status(404).json({
            success:false,
            message:'Data not found on this id',
           })
     }
        
     } catch (err) {
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Internal Server Error'
        })
     }
}