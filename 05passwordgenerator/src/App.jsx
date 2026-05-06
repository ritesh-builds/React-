// import { useState, useCallback, useEffect } from 'react'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charactersAllowed, setCharactersAllowed] = useState(false)
//   // Fix 1: Initialize password as a string, not a boolean
//   const [password, setPassword] = useState("") 
  
//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
//     if(numberAllowed) str += "1234567890"
//     if(charactersAllowed) str += "!@#$%^&*()_+=-{}:>?[];'./,<"

//     for(let i = 1; i <= length; i++){
//       // Fix 2: Remove the + 1 to prevent an out-of-bounds index
//       let char = Math.floor(Math.random() * str.length)
//       // Fix 3: Use += to append characters, rather than overwriting them
//       pass += str.charAt(char)
//     }

//     setPassword(pass)
//   }, [length, numberAllowed, charactersAllowed])

//   // Fix 4: Add a useEffect so the password generates on initial load and when settings change
//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charactersAllowed, passwordGenerator])
 
//   return (
//     /* Added a colorful background wrapper so the glass effect is visible */
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      
//       {/* 
//         THE IPHONE GLASS EFFECT CLASSES:
//         bg-white/20: Semi-transparent white background
//         backdrop-blur-lg: The frosted blur effect
//         border border-white/30: The shiny glass edge
//         shadow-2xl: Gives it depth and lifts it off the background
//       */}
//       <div className='rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 p-8 text-center w-full max-w-lg mx-auto shadow-2xl'>
        
//         <h1 className='text-3xl text-center text-white mb-6 font-semibold drop-shadow-md'>
//           Password Generator
//         </h1>
        
//         {/* Made the input area fit the glass theme */}
//         <div className='flex shadow-inner bg-black/20 rounded-xl overflow-hidden mb-6'>
//           <input 
//             className='p-4 outline-none w-full bg-transparent text-white placeholder-white/60 font-mono text-lg'  
//             placeholder='Password...' 
//             readOnly 
//             type="text"
//             value={password} // Fix 5: Bind the generated password to the input
//           />
//           <button className='text-white font-semibold bg-blue-600/90 hover:bg-blue-500 transition-colors px-6'>
//             Copy
//           </button>
//         </div>

//         <div className='flex flex-wrap gap-5 items-center justify-center text-white font-medium'>
//           <div className='flex items-center gap-2'>
//             <input 
//               type="range" 
//               min={6} 
//               max={50} // Fix 6: Set a hard max value instead of using the state
//               value={length}
//               className='cursor-pointer accent-white'
//               onChange={(evt) => {setLength(Number(evt.target.value))}}
//             /> 
//             <label>Length: {length}</label>
//           </div>

//           <div className='flex items-center gap-2'>
//             <input 
//               type="checkbox" 
//               id="number" 
//               checked={numberAllowed}
//               className='w-4 h-4 accent-blue-500'
//               onChange={() => {setNumberAllowed((prev) => !prev)}}
//             />
//             <label htmlFor="number">Numbers</label>
//           </div>

//           <div className='flex items-center gap-2'>
//             <input 
//               type="checkbox" 
//               id="character" 
//               checked={charactersAllowed}
//               className='w-4 h-4 accent-blue-500'
//               onChange={() => {setCharactersAllowed((prev) => !prev)}} // Fix 7: Changed this from setNumberAllowed
//             />
//             <label htmlFor="character">Characters</label>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App


















import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("") 
  
  // useeRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str += "1234567890"
    if(charactersAllowed) str += "!@#$%^&*()_+=-{}:>?[];'./,<"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charactersAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])
 
  return (
    /* 
      BACKGROUND
      Using a dark, moody water drop background from Unsplash to match your reference.
    */
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-slate-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://images.pexels.com/photos/28941878/pexels-photo-28941878.jpeg)"}}
    >
      
      {/* 
        MAIN GLASS CARD 
        Using bg-white/5 for a very faint tint, combined with heavy backdrop blur
      */}
      <div className='rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 w-full max-w-2xl mx-auto shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'>
        
        <h1 className='text-[1.35rem] tracking-wide text-center text-gray-200 mb-8 font-normal'>
          PASSWORD GENERATOR
        </h1>
        
        {/* Input Field Container - Pill Shape */}
        <div className='flex items-center justify-between bg-black/30 rounded-full border border-white/10 p-1.5 mb-8 shadow-inner'>
          <input 
            className='py-2 px-5 outline-none w-full bg-transparent text-cyan-100 placeholder-gray-500 font-mono text-lg tracking-wider'  
            placeholder='Password...' 
            readOnly 
            type="text"
            value={password}
            ref={passwordRef}
          />
          <button className='text-gray-200 text-xs font-semibold tracking-wider bg-white/5 hover:bg-white/10 transition-colors px-5 py-2.5 rounded-full border border-white/20 flex items-center gap-2 cursor-pointer'
          onClick={copyPasswordToClipboard}
          >
            COPY 
            {/* Minimalist copy icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>

        {/* Controls Section */}
        <div className='flex flex-wrap gap-x-8 gap-y-4 items-center justify-center text-gray-800 text-sm'>
          
          {/* Length Slider */}
          <div className='flex items-center gap-3'>
            <label>Length</label>
            <input 
              type="range" 
              min={6} 
              max={50} 
              value={length}
              className='cursor-pointer w-24 h-1.5 bg-gray-600 rounded-lg appearance-none accent-gray-300'
              onChange={(evt) => {setLength(Number(evt.target.value))}}
            /> 
            <span className="text-gray-300 w-4">{length}</span>
          </div>

          {/* Numbers Checkbox */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              id="number" 
              checked={numberAllowed}
              className='w-4 h-4 rounded border-gray-600 bg-black/30 text-gray-300 accent-gray-900 cursor-pointer focus:ring-0'
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="number" className="cursor-pointer hover:text-gray-200 transition-colors">Numbers</label>
          </div>

          {/* Characters Checkbox */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              id="character" 
              checked={charactersAllowed}
              className='w-4 h-4 rounded border-gray-600 bg-black/30 text-gray-300 accent-gray-400 cursor-pointer focus:ring-0'
              onChange={() => {setCharactersAllowed((prev) => !prev)}} 
            />
            <label htmlFor="character" className="cursor-pointer hover:text-gray-200 transition-colors">Characters</label>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default App


















// import { useState, useCallback, useEffect} from 'react'
// import './App.css'

// function App() {

//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charactersAllowed, setCharactersAllowed] = useState(false)
//   const [password, setPassword] = useState(false)
  
//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
//     if(numberAllowed) str += "1234567890"
//     if(charactersAllowed) str += "!@#$%^&*()_+=-{}:>?[];'./,<"

//     for(let i = 1; i <= length; i++){
//       let char = Math.floor( Math.random() * str.length + 1 )

//       pass += str.charAt(char)
//     }

//     setPassword(pass)

//   }, [length, numberAllowed, setPassword, charactersAllowed])
 
//   useEffect(() => {
//     passwordGenerator()
//   } , [length, numberAllowed, charactersAllowed, passwordGenerator])

//   return (
//     <>
//       <div className='rounded-2xl bg-slate-500 p-7 text-center w-full max-w-lg mx-auto shadow-lg my-44'>
//         <h1 className='text-4xl text-center text-white m-4'>Password Generator</h1>
//         <div className='flex m-5'>
//           <input className='p-4 m-1 outline-none w-full rounded-xl'  placeholder='Password...' readOnly type="text"/>
//           <button className='text-white-600 text-center font-mono bg-blue-600 m-1 p-3 w-20 rounded-xl'>Copy</button>
//         </div>
//         <div className='flex space-x-3'>
//           <input 
//           type="range" 
//           name="" 
//           min={6} 
//           max={length} 
//           className='cursor-pointer'
//           onChange={(evt) => {setLength(evt.target.value)}}
//           /> <label>Length: {length}</label>

//           <input 
//           type="checkbox" 
//           name="" id="number" 
//           onChange={(evt) => {setNumberAllowed((prev) => !prev)}}
//           /><label htmlFor="">Numbers</label>

//           <input type="checkbox" 
//           name="" id="character" 
//           onChange={(evt) => {setNumberAllowed((prev) => !prev)}}

//           /><label htmlFor="">Characters</label>

//         </div>
//       </div>
//     </>
//   )
// }

// export default App
