import { useState } from 'react'
import './App.css'

function App() {
     const [count, setCount] = useState(0)

  return (
         <div className="App">
               <header className="App-header">
                       <h1>投票所検索アプリ</h1>h1>
                       <p>岐阜市の投票所を検索できます</p>p>
                       <div className="card">
                                 <button onClick={() => setCount((count) => count + 1)}>
                                             カウント: {count}
                                           </button>button>
                               </div>div>
                       <p>
                                 アプリケーションが正常に動作しています！
                               </p>p>
                     </header>header>
             </div>div>
       )
}

export default App</div>
