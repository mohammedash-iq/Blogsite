import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function CreateBlog() {
  const [inputState, setInputState] = useState({
    title: "",
    content: "",
    discription: "",
  });

  function handleOnSubmit(event) {
    //handles the publishing for the data
    console.log("publishing the data");
    if ((inputState.title.trim() == "") | (inputState.content.trim() == "")) {
      alert("please add values to the title and content");
    }
    //conecting to api and publishing the blog
    event.preventDefault();
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto my-10 p-8 rounded-lg">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-2">New Post Draft</h1>
        <p className="mb-8 border-b pb-4">
          {" "}
          Fill out the details to publish your next piece.
        </p>

        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={inputState.title}
              onChange={(e) => {
                setInputState((prev) => ({ ...prev, title: e.target.value }));
              }}
              placeholder="Title for your Blog here...."
              required
              className="w-full p-3 border rounded-lg text-lg font-semibold"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              {" "}
              Description{" "}
            </label>
            <textarea
              onChange={(e) => {
                setInputState((prev) => ({
                  ...prev,
                  discription: e.target.value,
                }));
              }}
              name="description"
              value={inputState.discription}
              placeholder="A brief, compelling summary for search engines."
              rows="2"
              required
              className="w-full p-3 border rounded-lg resize-none"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              name="content"
              value={inputState.content}
              onChange={(e) => {
                setInputState((prev) => ({ ...prev, content: e.target.value }));
              }}
              placeholder="Start writing your content here..."
              rows="8"
              required
              className="w-full p-4 border rounded-lg resize-y font-mono text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-base font-medium"
          >
            Publish Blog Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
