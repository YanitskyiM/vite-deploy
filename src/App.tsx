import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-red-500 flex justify-center items-center h-screen'>
          <button
              onClick={()=> setCount(count+1)}
              type="button"
              className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
              {count}
          </button>
      </div>
  )
}

export default App
