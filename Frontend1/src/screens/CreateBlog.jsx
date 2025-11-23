import { useState } from "react";
import { postApiService } from "../services/userApiService";
import DashboardNavbar from "../components/DashboardNavbar"
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const navigate = useNavigate()
  const [inputState, setInputState] = useState({
    title: "",
    content: "",
    discription: "",
  });

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log("publishing the data");
    if ((inputState.title.trim() == "") | (inputState.content.trim() == "")) {
      alert("please add values to the title and content");
    }

    const res = await postApiService({ endpoint: "/api/user/blog/create", payload: { title: inputState.title, content: inputState.content } })
    alert(res.message)

  }
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <div>
        <div className="max-w-4xl mx-auto my-10 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">New Post Draft</h1>
          <p className="mb-8 border-b pb-4">
            Fill out the details to publish your next piece.
          </p>

          <form onSubmit={handleOnSubmit} className="space-y-6" method="POST">
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
              className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-base font-medium bg-amber-200 border"
            >
              Publish Blog Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
