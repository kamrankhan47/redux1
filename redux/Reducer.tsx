export function Reducer(state:any=[],action:any){
    
    
    switch(action.type){
        case "ADD_TASK":
            return[...state,action.payload]
            
            

        
    }
}