import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
   data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // Delete a blog from memory
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //   const [name, setName] = useState("Sam");
  //   const [age, setAge] = useState(24);
  //   const handleClick = () => {
  //     setName("Elisee");
  //     setAge(21);
  //   };

  // useEffect runs on every render
  //Here useEffect will track if the name is changed thus

  return (
    <div className="home">
      {/* This is a prop */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* Change name on click */}
      {/* <button onClick={() => setName("Eric")}>Change name</button> */}
      {/* <p>{name}</p> */}
      {/* filter blogs by author*/}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Sam")}
        title="Sam's blogs"
      /> */}
    </div>

    /*{ <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button> }*/
  );
};

export default Home;
