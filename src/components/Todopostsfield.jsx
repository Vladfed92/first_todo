import Post from './Post'
import style from './todopostfield.module.css'

function Todopostsfield(props) {
  // диструктуруємо пропертіс (props) переданного від app.js
  const { posts, deletePostHandler, togglePostHandler, setPosts } = props

  return (
    <div className={style.post_field}>
      {/* Перебераємо масив з постами для повернення окремих постів в массиві */}
      {posts.map((post) => {
        // Повертаємо окремий пост з ключем зі значенням номером індексу та props для компанента Post
        return (
          <Post
            key={post.id}
            post={post}
            posts={posts}
            deletePostHandler={deletePostHandler}
            togglePostHandler={togglePostHandler}
            setPosts={setPosts}
          />
        )
      })}
    </div>
  )
}

export default Todopostsfield
