import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'
import ImageUpload from './components/imageInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Всего адресатов {count}
        </button>
      </div>
      <label>
        All: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/>
        <br />
      </label>
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
        Balance: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/><input name="InputChatId"/>
        <br />
      </label>
      <label>
        Date: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/><input name="InputChatId"/>
        <br />
      </label>
      <label>
        Place: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/>
        <br />
      </label>
      <label>
        Created: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/><input name="InputChatId"/>
        <br />
      </label>
      <label>
        Updated: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/><input name="InputChatId"/>
        <br />
      </label>
      <label>
        Born in Day: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/>
        <br />
      </label>
      <label>
        Born in Month: <input type="checkbox" name="myCheckbox" />
        <input name="InputChatId"/>
        <br />
      </label>
      <label>
        Write your post:
        <br />
        <textarea name="postContent" rows={4} cols={40} />
        <br />
      </label>
      <ImageUpload />

      <progress value={0.5} />
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
