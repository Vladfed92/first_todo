import { useState } from 'react'
import style from './post.module.css'

function Post(props) {
  // деструктуруємо проперті (props) від Todopostfield
  const { post, posts, deletePostHandler, togglePostHandler, setPosts } = props
  // додаємо хук зміни посту
  const [postEditing, setPostEditing] = useState()
  // додаємо хук зміни текста посту
  const [editingText, setEditingText] = useState(post.text)
  // функція визову циклу для зміни тексту поста згідно id
  function editPost(id) {
    const updatedPosts = posts.map((post) => {
      return post.id === id ? { ...post, text: editingText } : { ...post }
    })
    setPosts(updatedPosts)
    setPostEditing()
    setEditingText('')
  }

  return (
    <>
      {/* повертаємо значення поста з масиву Posts */}
      {/* якщо значення змінної postEditing дорівнює post.id, ми повертаємо input для зміни цього поста
      якщо не дорівнює -> повертаємо доданий пост.
      */}
      {postEditing === post.id ? (
        <div
          className={`${style.post} ${
            post.isComplited ? style.postComplited : ''
          }`}
        >
          <input
            type="text"
            onChange={(event) => setEditingText(event.target.value)}
            value={editingText}
          />
          <button
            onClick={() =>
              editingText.length > 0
                ? editPost(post.id)
                : alert('Type your editing text')
            }
          >
            Submit editing
          </button>
        </div>
      ) : (
        <div
          className={`${style.post} ${
            post.isComplited ? style.postComplited : ''
          }`}
        >
          <h3 className={style.post_text}>{post.text}</h3>
          <div className={style.post_buttons}>
            <button
              className={style.post_button}
              onClick={() => deletePostHandler(post.id)}
            >
              Delete Post
            </button>

            <button
              className={style.post_button}
              onClick={() => togglePostHandler(post.id)}
            >
              Done
            </button>
            <button
              className={style.post_button}
              onClick={() => {
                setPostEditing(post.id)
              }}
            >
              Edit Todo
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Post
