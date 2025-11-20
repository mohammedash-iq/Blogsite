import {create} from "zustand"

const blogStore=create((set)=>({
blogs: [
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
  ]
}));

const userBlogStore=create((set)=>({
    userBlogs: [
    {
      blogId: 121,
      title: "title1",
      content:
        "lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12",
      created_date: Date.now(),
    },
    {
      blogId: 123,
      title: "title2",
      content:
        "lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12lorem12",
      created_date: Date.now(),
    },
  ]

}))

export {blogStore,userBlogStore}