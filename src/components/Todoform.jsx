import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import style from './todoform.module.css'

function Todoform(props) {
  // Деструктуруємо переданні Пропертіс (props) від app.js
  const { posts, setPosts } = props

  // використовуємо хук useState для додавання тексту в массив постів
  const [text, setText] = useState('')

  // функція отримання данних (строки input) при створенні події
  function eventTargetHandler(event) {
    // додаємо текст написаний в input до змінної text
    setText(event.target.value)
  }

  //  функція додавання нових постів(строк) у массив постів
  function addPostsHandler(text) {
    // створюмо масив посту з унікальними ключами
    const newPost = {
      text: text,
      id: uuidv4(),
      isComplited: false,
    }
    // деструктуруємо массив постів та додаємо до нього новий ПОСТ
    setPosts(newPost.text ? [...posts, newPost] : [...posts])
  }

  // функція для тегу form для передачі данних змінній text в масив постів після події onClick
  function onSubmitHandler(event) {
    // використовуємо вбудовану функцію для відміни всіх дій після події
    event.preventDefault()
    //  додаємо текст до масиву постів
    addPostsHandler(text)
    // обнуляємо поле вводу input
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={style.textarea}
        type="text"
        placeholder="Create new ToDo"
        onChange={eventTargetHandler}
        value={text}
      />
      <input className={style.submit} type="submit" />
    </form>
  )
}

export default Todoform
