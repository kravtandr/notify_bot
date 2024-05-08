import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
import ImageUpload from './components/imageInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Notify</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Всего адресатов {count}
        </button>
      </div>
      <label>
        ChatId: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/>
        <br />
      </label>
      <label>
        Имя содержит: <input type="checkbox" name="myCheckbox" /><input name="InputName" />
        <br />
      </label>
      <label>
        Write your post:
        <br />
        <textarea name="postContent" rows={4} cols={40} />
        <br />
      </label>
      <ImageUpload />

      
      <select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <progress value={0.5} />
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
      {/*  */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
