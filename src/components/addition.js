import React, {useState} from "react"
function Addition(){
    const[count, SetCount] = useState(0)

    return(<div>
            <h1>{count}</h1>
            <h1 onClick={()=> SetCount(count +1) }>Click it</h1>
    </div>)
}
export default Addition