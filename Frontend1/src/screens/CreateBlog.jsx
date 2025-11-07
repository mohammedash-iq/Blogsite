import { useState } from "react";
function CreateBlog() {
  const [inputState, setInputState] = useState({ title: "", content: "" });

  function handlePublish(event) {
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
      <form className="flex flex-col ">
        <input
          value={inputState.title}
          onChange={(e) => {
            setInputState((prev) => ({ ...prev, title: e.target.value }));
          }}
          className="text-2xl"
          type="text"
          placeholder="Enter the title for the blog.."
          name="title"
        />
        <input
          onChange={(e) => {
            setInputState((prev) => ({ ...prev, content: e.target.value }));
          }}
          value={inputState.content}
          className="text-xl"
          type="text"
          placeholder="content for the blog"
          name="content"
          id=""
        />
        <button onClick={handlePublish} className="bg-amber-500 w-20 p-2">
          Publish
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
