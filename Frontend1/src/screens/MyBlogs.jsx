function MyBlogs() {
  const myBlogs = [
    {
      blogId: 121,
      title: "title1",
      content:
        "lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12",
      created_date: Date.now(),
    },
    {
      blogId: 123,
      title: "title2",
      content:
        "lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12",
      created_date: Date.now(),
    },
  ];
  function handleDeleteBlog(e) {
    //give a confromation screen and delete the blog from the database and the local state
    console.log(e.target.value);
  }
  function handleEditBlog(e) {
    //give a conformation screen and go to edit blog page with the blog details
    console.log(e.target.value);
  }
  return (
    <div>
      <h2>My blogs</h2>
      <div>
        {myBlogs.map((blog) => {
          return (
            <div className="m-4 p-4" key={blog.blogId}>
              <h4 className="text-2xl">{blog.title}</h4>
              <p>{blog.created_date}</p>
              <p>{blog.content.substring(0, 100)}</p>
              <button className="text-blue-300">Readmore...</button>
              <button onClick={handleDeleteBlog} className="bg-red-400">
                Delete
              </button>
              <button onClick={handleEditBlog} className="bg-blue-400">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBlogs;
