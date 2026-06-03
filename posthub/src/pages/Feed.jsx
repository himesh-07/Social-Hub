import CreatePost from "../components/CreatePost";
import { useEffect } from "react";
import API from "../services/api";
function Feed({ posts, addPost, setPosts}) {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []); 
  return (
    <div className="container-fluid bg-light min-vh-100 py-4 text-dark">
     
     
     
     
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row gx-4">

          {/* Left Side */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-4">

            <CreatePost addPost={addPost} />

            {posts.length === 0 ? (
              <div className="card shadow-lg border-2">
                <div className="card-body text-center">
                  <h5>No Posts Yet</h5>
                  <p className="text-muted">
                    Create your first post.
                  </p>
                </div>
              </div>
            ) : (
              posts.map((post, index) => (
                <div
                  key={index}
                  className="card shadow-sm border-0"
                >
                  <div className="card-body">
                   
                    
                    
                    {post.text && (
                      <p className="mb-3">{post.text}</p>
                    )}

                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="img-fluid rounded card-img-top"
                      />
                    )}

                  </div>
                </div>
              ))
            )}

          </div>

          {/* Right Sidebar */}
          <div className="col-12 col-lg-4 d-none d-lg-flex flex-column gap-4">

            <div className="card shadow-lg border-2">
              <div className="card-body">
                <h6 className="text-muted fw-bold mb-3">
                  📈 POPULAR
                </h6>

                <div className="mb-3">
                  <a
                    href="https://www.bbc.com/news/technology-39095127"
                    className="text-decoration-none fw-bold"
                  >
                    Nokia 3310 mobile phone resurrected
                  </a>
                  <div className="text-muted small">
                    More than 126 million were produced before it was phased out in 2005.
                  </div>
                </div>

                <div className="mb-3">
                  <a
                    href="https://science.nasa.gov/earth/earth-observatory/a-strained-water-system-in-chile-146577/"
                    className="text-decoration-none fw-bold"
                  >
                    A Strained Water System in Chile

                  </a>
                  <div className="text-muted small">
                    Around Santiago, home to more than 7 million people,with just 10 to 20 percent of normal rain falling during
                  </div>
                </div>

                <div className="mb-3">
                  <a
                    href="#"
                    className="text-decoration-none fw-bold"
                  >
                    Royal Challengers Bengaluru win IPL 2026 title as Virat Kohli ...

                  </a>
                  <div className="text-muted small">
                     Royal Challengers Bengaluru beat Gujarat Titans in the final to win the IPL 2026 title. Virat Kohli scored 75 off 42 balls
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg border-2">
              <div className="card-body">
                <h6 className="text-muted fw-bold mb-3">
                  SPONSORED
                </h6>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHCtU0ZqrGUVNAjK1KTE9mPvltzrVOTV7hw&s"
                  alt="Ad"
                  className="img-fluid rounded mb-2"
                />

                <h6>Car Insurance</h6>

                <p className="text-muted small">
                  What does looking at things a little
                  differently do for insurance?
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Feed;