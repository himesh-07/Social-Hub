function PostCard({ post }) {
  return (
    <div>
      <h4>{post.user}</h4>

      {post.text && <p>{post.text}</p>}

      {post.image && (
        <img
          src={post.image}
          alt="post"
          width="250"
        />
      )}
    </div>
  );
}

export default PostCard;