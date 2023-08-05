import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import './homeStyle.css'

async function  handler(data){
    console.log(data)
    let result=await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/post',{
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    result=await result.json()
    console.log(result)
}

function AddPost() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    
    return (
    <form onSubmit={handleSubmit((data) =>handler(data) )}>
          <div className="container">
        <div className='form'>
            <h1>Enter New Post</h1>
            <div className="form-group">
                
                <TextField id="title" label="Title" variant="outlined" sx={{width:'98%'}} {...register('title')} />
            </div>

            <div className="form-group">
               
                <TextField id="ID" label="ID" variant="outlined" sx={{width:'98%'}} {...register('id')} />
            </div>

            <div className="form-group">
               
                <TextField id="Cover" label="Cover" variant="outlined" sx={{width:'98%'}} {...register('cover')} />
            </div>
            <div className="form-group">
               
                <TextField id="Description" multiline label="Description" variant="outlined" sx={{width:'98%'}} {...register('description')}/>
            </div>

            <input type="submit" value="Submit"/>
        </div>
    </div>
    </form>
  );
}

export default AddPost
