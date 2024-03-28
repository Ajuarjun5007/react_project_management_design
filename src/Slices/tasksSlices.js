import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{},
    isLoading:false,
    error:''
}

export const getTasksFromServer  = createAsyncThunk(
    "tasks/getTasksFromServer",
    async (_,{rejectWithValue})=>{
        const response  = await fetch('http://localhost:9000/tasks')
        if(response.ok){
            const jsonResponse  = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error:'No Tasks Found'}) 
        }
    }
)


const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        addTaskToList:(state,action)=>{
            const id = Math.random()*100
            let task = {...action.payload,id}
            console.log("task",task);
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action)=>{
            state.tasksList=state.tasksList.filter((task)=>{
              return   task.id !== action.payload.id})
        },
        updateTaskInList:(state,action)=>{
            state.tasksList = state.tasksList.map((task)=>{
               return  task.id === action.payload.id ? action.payload : task})
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask = action.payload
        }
    }
})
export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions
export default tasksSlice.reducer