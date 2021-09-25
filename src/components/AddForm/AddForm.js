import { useState } from "react";
import { useDispatch } from "react-redux";

const AddForm = ()=>{
  const[inputValue,setInputValue] = useState('');
  console.log(inputValue);
  const dispatch = useDispatch();

  return(
    <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(inputValue!='')
            {
              dispatch({type:'ADD_TASK',payload:inputValue});
              setInputValue('');
            }
            else{
              alert('Enter data!!!');
            }
            
        }}>
            <div style={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}>
                <input class="form-control" onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} placeholder="my task..." style={{width:"270px"}}/>
                <input class="btn btn-dark" type="submit" value="Add Task"/>
            </div>
        </form>
    </>
  )
}

export default AddForm;