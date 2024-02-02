import Navigation from "../components/Navigation";
import Meta from "../components/Meta";

const Blog = () => {
  return (
    <>
      <Meta title="Blogs" />
      <Navigation title="Blogs" />
      <div className="blog">
        <div className="container-xxl">
          <div className="row">
            <h2 className="d-flex align-items-center justify-content-center h-500">
              Coming soon...
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
