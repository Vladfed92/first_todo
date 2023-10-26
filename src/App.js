import { useState, useEffect } from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Todopostsfield from './components/Todopostsfield';


function App() {
  // Використовуємо хук useState для створення массиву постів (строк)
  // Робимо його саме тут, бо дистрктуровані змінні будуть використовуватись в двух окремих компанентах.
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts")
    return savedPosts ? JSON.parse(savedPosts) : []
    // якщо є збережені данні у localStorage -> розпарсюємо його зі строки на об'єкти (JSON.parse(savedPosts))
    // якщо немає -> повертаємо пусти' об'єкт
  })
  

  // Хук useEffect зберігає у localStorage oб'єкти posts у вигляді строки (JSON.stringify(posts))
  //  в массив об'єктів під назвою "posts" під час зміни об'єкту posts ([posts]).
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts])

  // створюємо функцію видалення посту
  const deletePostHandler = (id) => {
    // використовуємо функцію setPost (тільки вона може змінити змінну posts) та 
    // завдяки методу filter повертаємо усі пости, з несовпадаючими ID поста
    setPosts(posts.filter((post) => { return post.id !== id }))
  }

  // Функція toggle для перемикання виконаної задачі 
  const togglePostHandler = (id) => {
    setPosts(posts.map((post) => {
      return post.id === id
        ? { ...post, isComplited: !post.isComplited } :
        { ...post }
    }))
  }

  return (
    <div className="App">
      <div className='todo'>
        <div className='form_field'> <Todoform posts={posts} setPosts={setPosts} /></div>
        <div className='Область постів'><Todopostsfield posts={posts} deletePostHandler={deletePostHandler} togglePostHandler={togglePostHandler} setPosts={setPosts} /></div>
      </div>
    </div>
  );
}

export default App;
