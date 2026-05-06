import React from 'react'

function Groot(props) {
  console.log("props: ", props);
  console.log(props.username);
  console.log(props.username);
  
  return (
    <div>
      <div className="flex flex-col items-center p-7 rounded-2xl gap-4">
        <div>
          <h2 className="text-xl font-bold text-center mb-3">Groot</h2>

          <img
            className="w-48 h-48 object-cover shadow-xl rounded-md"
            src="https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"
            alt="Groot"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-sm">
          <span>Class Warfare</span>
          <span>The Anti-Patterns</span>

          <span className="flex gap-2">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Groot
