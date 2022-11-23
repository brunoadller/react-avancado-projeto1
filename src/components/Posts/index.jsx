import { PostCard } from "../PostCard";
import "./styles.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            cover={post.cover}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        );
      })}
    </div>
  );
};
export default Posts;
