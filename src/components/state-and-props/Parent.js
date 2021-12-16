import React from "react";
import ChildData from "./Child"

const Parent = () => {

    let data = "parent data sending to child"

    return(
        <div>
        <h4>ParentData</h4>
          <ChildData data = {data}/>
        </div>
        )
}
export default Parent;
