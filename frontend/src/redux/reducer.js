import { ADD_USER } from "./actionType";

const init = {
    user:[]
}

const userReducer = (state=init,action) =>{
    switch (action.type) {
        case ADD_USER: return{
            ...state,
            user:action.payload
        }
    
        default: return state
    }
}

export default userReducer