import image from "../assets/image.jpg"
import { blogStore } from "../store/MyblogsStore";
function Blogs() {
  const blogList = blogStore((state) => state.blogs)
  return (
    <div className="py-10" style={{backgroundColor: 'var(--background)'}}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight" style={{color: 'var(--text-primary)'}}>Latest Blogs</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" style={{borderColor: 'var(--border-color)'}}>
          {blogList.map((blog) => (
            <article key={blog.blog_id} className="flex max-w-xl flex-col items-start justify-between p-4 rounded-lg" style={{backgroundColor: 'var(--card-background)'}}>
               <img className="overflow-hidden" src={image} alt={blog.title+"image"} />
              <div className="flex items-center gap-x-4 text-xs">
                <time style={{color: 'var(--text-secondary)'}}>
                  {blog.created_date}
                </time>
                <a
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium"
                  style={{backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)'}}
                >
                  {blog.title}
                </a>
              </div>
              <div className="group relative grow mt-3">
                <h3 className="text-lg font-semibold" style={{color: 'var(--text-primary)'}}>
                  <a href="">
                    <span className="absolute inset-0" />
                    {blog.title}
                  </a>
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src="" className="size-10 rounded-full" style={{backgroundColor: 'var(--input-background)'}} />
                <div className="text-sm/6">
                  <p className="font-semibold" style={{color: 'var(--text-primary)'}}>
                    <a href="">
                      <span className="absolute inset-0" />
                      {""}
                    </a>
                  </p>
                  <p style={{color: 'var(--text-secondary)'}}>{""}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
