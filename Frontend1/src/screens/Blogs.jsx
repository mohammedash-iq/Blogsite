function Blogs() {
  const blogList = [
    {
      blogId: "101",
      title: "title 2",
      content:
        "lorem2lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem299",
      created_date: Date.now(),
    },
    {
      blogId: "102",
      title: "title 2",
      content:
        "lorem2lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem299",
      created_date: Date.now(),
    },
    {
      blogId: "103",
      title: "title 3",
      content:
        "lorem2lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem299",
      created_date: Date.now(),
    },
    {
      blogId: "104",
      title: "title 4",
      content:
        "lorem2lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem299",
      created_date: Date.now(),
    },
    {
      blogId: "105",
      title: "title 5",
      content:
        "lorem2lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem29lorem299",
      created_date: Date.now(),
    },
  ];

  return (
    <div className="overflow-scroll max-w-[1000px]">
      <h2 className="text-3xl text-gray-400 m-4">Latest Blogs</h2>
      <div >
        {blogList.map((blog) => {
          return (
            <div className="m-4 p-4" key={blog.blogId}>
              <h4 className="text-2xl">{blog.title}</h4>
              <p>{blog.created_date}</p>
              <p>{blog.content.substring(0,100)}</p>
              <button className="text-blue-300">Readmore...</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
