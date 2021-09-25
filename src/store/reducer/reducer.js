const initialState = {
    tasks:[
        /* {name:'Зробити уроки1',isImportant:false,isActive:false,isDone:false},*/
    ],
    doneTask:0,
    unDoneTask:0
}

export const reducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case "REMOVE_TASK":{
            if(state.tasks[action.payload].isDone)
            { 
                return{
                    ...state,tasks:[...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)],doneTask:state.doneTask-1
                }
            }
            else
            {
                return{
                    ...state,tasks:[...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)],unDoneTask:state.unDoneTask-1
                }
            }
        }
        case "ADD_TASK":{
            let newTask = {name:action.payload,isDone:false};
            return{
                ...state,tasks:[...state.tasks,newTask],unDoneTask:state.unDoneTask+1
            }
        }
        case "FLIP_ISDONE":{
            let befor = state.tasks.slice(0,action.payload);
            let changedTask = state.tasks[action.payload];
            changedTask.isDone = !changedTask.isDone;
            let after = state.tasks.slice(action.payload+1);
            console.log(`state.tasks.isDone=${state.tasks[action.payload].isDone}`);
            
            if(state.tasks[action.payload].isDone)
            {
                return{
                    ...state,tasks:[...befor,changedTask,...after],doneTask:state.doneTask+1,unDoneTask:state.unDoneTask-1
                }
            } 
            else
            {
                return{
                    ...state,tasks:[...befor,changedTask,...after],doneTask:state.doneTask-1,unDoneTask:state.unDoneTask+1
                }
            }           
            
        }
        
        default:{
            return state;
        }
    }
}