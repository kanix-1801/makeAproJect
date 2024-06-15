import { useState } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);

    const [password, setPassword] = useState("");


    return (<>
        <div className="absolute top-0 left-0 w-screen h-screen bg-gray-600">
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                    // ref={passwordRef}
                    />
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input className='cursor-pointer'
                            type="range" min={6}
                            max={100}
                        // value={length}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            defaultChecked={numberAllowed}
                            type="checkbox" id="numberInput"
                            onChange={() => { setNumberAllowed(!numberAllowed) }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            defaultChecked={charAllowed}
                            type="checkbox" id="characterInput"
                            onChange={() => { setCharAllowed(!charAllowed) }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default PasswordGenerator;