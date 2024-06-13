import { useState } from "react";

const BcolorProject = () => {
    const [color, setColor] = useState("red");


    return (<>
        <div className="w-[300px] h-[150px]" style={{ backgroundColor: color }}></div >
        <div>
            <button onClick={() => { setColor("white") }} className="w-[90px] h-[50px]">white</button>
            <br />
            <button onClick={() => { setColor("black") }} className="w-[90px] h-[50px] bg-blue-500">black</button>
            <br />
            <button onClick={() => { setColor("green") }} className="w-[90px] h-[50px] bg-green-500">green</button>
            <br />
            <button onClick={() => { setColor("red") }} className="w-[90px] h-[50px] bg-red-500">red</button>
        </div>
    </>)
}

export default BcolorProject;