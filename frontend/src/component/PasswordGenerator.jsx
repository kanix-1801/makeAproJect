import { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    // const [symbolAllowed, setSymbolAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = useCallback(() => {
        const stringChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";
        var str = stringChar;

        if (numberAllowed) {
            str = str + numbers;
        }
        if (charAllowed) {
            str = str + specialChars;
        }
        var size = str.length;
        let ans = "";

        for (let i = 0; i < length; i++) {
            let k = Math.floor(size * Math.random());
            ans = ans + str.charAt(k);
        }
        setPassword(ans);
        console.log(ans)
    }, [length, numberAllowed, charAllowed])

    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, charAllowed])
    const passwordRef = useRef(null)
    const copyTo = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select();
    }


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
                        ref={passwordRef}
                    />
                    {/* () => { window.navigator.clipboard.writeText(password) } */}
                    <button onClick={copyTo} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input className='cursor-pointer'
                            type="range" min={6}
                            max={20}
                            value={length}
                            onChange={(e) => (setLength(e.target.value))}

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