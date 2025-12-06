const blogs =[
  {
    "blog_id": 1,
    "user_id": 1,
    "title": "Mastering JavaScript Closures",
    "description": "A simple explanation of closures with practical examples.",
    "category": "Programming",
    "image_url": "example.com/images/js-closures.png",
    "likes": 23,
    "views": 180,
    "content": "Closures allow inner functions to access outer scope variables even after the outer function has returned.",
    "created_at": "2025-01-01 10:15:23",
    "updated_at": "2025-01-01 10:15:23"
  },
  {
    "blog_id": 2,
    "user_id": 1,
    "title": "Why Side Projects Matter",
    "description": "How side projects help developers accelerate growth.",
    "category": "Career",
    "image_url": "https://example.com/images/side-projects.jpg",
    "likes": 57,
    "views": 402,
    "content": "Side projects give you the freedom to experiment and grow without pressure.",
    "created_at": "2025-01-02 08:41:10",
    "updated_at": "2025-01-02 08:41:10"
  },
  {
    "blog_id": 3,
    "user_id": 1,
    "title": "Understanding REST APIs",
    "description": "A breakdown of what REST APIs are and how they work.",
    "category": "Backend",
    "image_url": "https://example.com/images/rest-api.png",
    "likes": 12,
    "views": 150,
    "content": "REST APIs use standard HTTP verbs to maintain predictable communication.",
    "created_at": "2025-01-03 12:22:55",
    "updated_at": "2025-01-03 12:22:55"
  },
  {
    "blog_id": 4,
    "user_id": 1,
    "title": "5 Mistakes New Programmers Make",
    "description": "Common mistakes most beginners fall into.",
    "category": "Programming",
    "image_url": "https://example.com/images/beginner-mistakes.jpg",
    "likes": 34,
    "views": 288,
    "content": "Mistake one: copying code without understanding. Mistake two: avoiding hard problems.",
    "created_at": "2025-01-04 16:10:01",
    "updated_at": "2025-01-04 16:10:01"
  },
  {
    "blog_id": 5,
    "user_id": 1,
    "title": "How to Stay Motivated While Learning to Code",
    "description": "Mindset shifts for long-term consistency.",
    "category": "Self-Improvement",
    "image_url": "https://example.com/images/motivation.jpg",
    "likes": 89,
    "views": 720,
    "content": "Motivation is unreliable. Build habits and routines instead.",
    "created_at": "2025-01-05 09:55:43",
    "updated_at": "2025-01-05 09:55:43"
  },

  {
    "blog_id": 6,
    "user_id": 1,
    "title": "The Power of Data Structures",
    "description": "Why DSAs matter in real-world programming.",
    "category": "Computer Science",
    "image_url": "https://example.com/images/dsa.png",
    "likes": 40,
    "views": 310,
    "content": "Choosing the right data structure can reduce runtime drastically.",
    "created_at": "2025-01-06 11:22:10",
    "updated_at": "2025-01-06 11:22:10"
  },
  {
    "blog_id": 7,
    "user_id": 1,
    "title": "Intro to Docker for Beginners",
    "description": "Your first step into containerization.",
    "category": "DevOps",
    "image_url": "https://example.com/images/docker.png",
    "likes": 48,
    "views": 400,
    "content": "Docker packages applications along with dependencies into portable containers.",
    "created_at": "2025-01-07 13:59:47",
    "updated_at": "2025-01-07 13:59:47"
  },
  {
    "blog_id": 8,
    "user_id": 1,
    "title": "Event Loops in JavaScript Explained",
    "description": "Understanding async behavior the right way.",
    "category": "Programming",
    "image_url": "https://example.com/images/event-loop.png",
    "likes": 18,
    "views": 220,
    "content": "The event loop handles asynchronous callbacks and ensures non-blocking behavior.",
    "created_at": "2025-01-08 10:20:15",
    "updated_at": "2025-01-08 10:20:15"
  },
  {
    "blog_id": 9,
    "user_id": 1,
    "title": "CSS Grid vs Flexbox",
    "description": "When to use which layout method.",
    "category": "Frontend",
    "image_url": "https://example.com/images/css-grid-flexbox.png",
    "likes": 17,
    "views": 190,
    "content": "Grid is for two-dimensional layouts; Flexbox is for one dimension.",
    "created_at": "2025-01-09 14:33:02",
    "updated_at": "2025-01-09 14:33:02"
  },
  {
    "blog_id": 10,
    "user_id": 1,
    "title": "Building Your First Django App",
    "description": "A simple guide to kickstart Django development.",
    "category": "Backend",
    "image_url": "https://example.com/images/django.png",
    "likes": 52,
    "views": 610,
    "content": "Django provides models, views, templates, and ORM to build apps quickly.",
    "created_at": "2025-01-10 17:12:50",
    "updated_at": "2025-01-10 17:12:50"
  },

  {
    "blog_id": 11,
    "user_id": 1,
    "title": "What Makes a Clean Codebase?",
    "description": "Principles behind maintainable code.",
    "category": "Programming",
    "image_url": "https://example.com/images/clean-code.jpg",
    "likes": 65,
    "views": 540,
    "content": "Clean code follows simplicity, readability, and consistency.",
    "created_at": "2025-01-11 09:15:20",
    "updated_at": "2025-01-11 09:15:20"
  },
  {
    "blog_id": 12,
    "user_id": 1,
    "title": "Understanding Big-O Notation",
    "description": "Explaining time complexity for beginners.",
    "category": "Computer Science",
    "image_url": "https://example.com/images/big-o.png",
    "likes": 39,
    "views": 290,
    "content": "Big-O describes how runtime scales with input size.",
    "created_at": "2025-01-12 10:10:10",
    "updated_at": "2025-01-12 10:10:10"
  },
  {
    "blog_id": 13,
    "user_id": 1,
    "title": "Is AI Replacing Developers?",
    "description": "An honest breakdown of AI's role in coding.",
    "category": "Technology",
    "image_url": "https://example.com/images/ai-devs.jpg",
    "likes": 71,
    "views": 820,
    "content": "AI enhances productivity but cannot replace logical problem-solving.",
    "created_at": "2025-01-13 14:22:22",
    "updated_at": "2025-01-13 14:22:22"
  },
  {
    "blog_id": 14,
    "user_id": 1,
    "title": "State Management in React",
    "description": "A comparison between Redux, Context API, and Zustand.",
    "category": "Frontend",
    "image_url": "https://example.com/images/react-state.png",
    "likes": 30,
    "views": 350,
    "content": "State management solves predictable UI updates in complex apps.",
    "created_at": "2025-01-14 11:50:33",
    "updated_at": "2025-01-14 11:50:33"
  },
  {
    "blog_id": 15,
    "user_id": 1,
    "title": "What is Web3?",
    "description": "A non-hyped explanation of decentralized web.",
    "category": "Blockchain",
    "image_url": "https://example.com/images/web3.png",
    "likes": 24,
    "views": 260,
    "content": "Web3 aims for decentralization using blockchain networks.",
    "created_at": "2025-01-15 15:05:42",
    "updated_at": "2025-01-15 15:05:42"
  },

  {
    "blog_id": 16, "user_id": 1, "title": "How VPNs Actually Work",
    "description": "Demystifying tunneling and encryption.",
    "category": "Cybersecurity",
    "image_url": "https://example.com/images/vpn.jpg",
    "likes": 45, "views": 330,
    "content": "VPNs encrypt your traffic and route it through remote servers.",
    "created_at": "2025-01-16 09:20:11",
    "updated_at": "2025-01-16 09:20:11"
  },

  {
    "blog_id": 17, "user_id": 1, "title": "SQL vs NoSQL",
    "description": "Choosing the right database for your project.",
    "category": "Backend",
    "image_url": "https://example.com/images/sql-nosql.png",
    "likes": 51, "views": 410,
    "content": "SQL is structured and relational; NoSQL offers schema flexibility.",
    "created_at": "2025-01-17 11:40:19",
    "updated_at": "2025-01-17 11:40:19"
  },

  {
    "blog_id": 18, "user_id": 1, "title": "Why Linux is Loved by Developers",
    "description": "Reasons why devs prefer Linux over Windows.",
    "category": "Technology",
    "image_url": "https://example.com/images/linux.png",
    "likes": 62, "views": 700,
    "content": "Linux offers stability, control, and powerful CLI tools.",
    "created_at": "2025-01-18 13:25:47",
    "updated_at": "2025-01-18 13:25:47"
  },

  {
    "blog_id": 19, "user_id": 1, "title": "Version Control Best Practices",
    "description": "How to maintain clean Git histories.",
    "category": "DevOps",
    "image_url": "https://example.com/images/git.png",
    "likes": 33, "views": 330,
    "content": "Write meaningful commit messages and use feature branches.",
    "created_at": "2025-01-19 14:55:10",
    "updated_at": "2025-01-19 14:55:10"
  },

  {
    "blog_id": 20, "user_id": 1, "title": "HTTP vs HTTPS",
    "description": "Why encryption matters more than ever.",
    "category": "Cybersecurity",
    "image_url": "https://example.com/images/https.png",
    "likes": 27, "views": 260,
    "content": "HTTPS encrypts communication and prevents MITM attacks.",
    "created_at": "2025-01-20 10:30:22",
    "updated_at": "2025-01-20 10:30:22"
  },

  {
    "blog_id": 21, "user_id": 1,
    "title": "API Rate Limiting Explained",
    "description": "How servers prevent request abuse.",
    "category": "Backend",
    "image_url": "https://example.com/images/rate-limit.png",
    "likes": 41, "views": 390,
    "content": "Rate limiting protects services by restricting request frequency.",
    "created_at": "2025-01-21 12:12:12",
    "updated_at": "2025-01-21 12:12:12"
  },

  {
    "blog_id": 22, "user_id": 1,
    "title": "JWT Authentication Basics",
    "description": "Understanding tokens and secure sessions.",
    "category": "Backend",
    "image_url": "https://example.com/images/jwt.png",
    "likes": 56, "views": 520,
    "content": "JWT stores user claims in a signed token for stateless authentication.",
    "created_at": "2025-01-22 11:11:11",
    "updated_at": "2025-01-22 11:11:11"
  },

  {
    "blog_id": 23, "user_id": 1,
    "title": "Why You Should Learn Algorithms Early",
    "description": "Long-term benefits of understanding algorithms.",
    "category": "Computer Science",
    "image_url": "https://example.com/images/algorithms.png",
    "likes": 37, "views": 310,
    "content": "Algorithms improve efficiency and problem-solving skills.",
    "created_at": "2025-01-23 10:42:30",
    "updated_at": "2025-01-23 10:42:30"
  },

  {
    "blog_id": 24, "user_id": 1,
    "title": "Debugging Like a Pro",
    "description": "How to troubleshoot code efficiently.",
    "category": "Programming",
    "image_url": "https://example.com/images/debugging.jpg",
    "likes": 63, "views": 450,
    "content": "Good debugging starts with isolating the problem.",
    "created_at": "2025-01-24 17:30:00",
    "updated_at": "2025-01-24 17:30:00"
  },

  {
    "blog_id": 25, "user_id": 1,
    "title": "Cloud Computing for Beginners",
    "description": "AWS, GCP, and Azure explained simply.",
    "category": "Cloud",
    "image_url": "https://example.com/images/cloud.png",
    "likes": 54, "views": 480,
    "content": "Cloud computing offers scalable and cost-efficient infrastructure.",
    "created_at": "2025-01-25 09:22:18",
    "updated_at": "2025-01-25 09:22:18"
  },

  {
    "blog_id": 26, "user_id": 1,
    "title": "The Truth About Multithreading",
    "description": "Understanding concurrency without confusion.",
    "category": "Computer Science",
    "image_url": "https://example.com/images/threading.png",
    "likes": 35, "views": 290,
    "content": "Multithreading allows tasks to execute in parallel for better performance.",
    "created_at": "2025-01-26 08:40:50",
    "updated_at": "2025-01-26 08:40:50"
  },

  {
    "blog_id": 27, "user_id": 1,
    "title": "How Search Engines Really Work",
    "description": "Indexing, crawling, and ranking explained.",
    "category": "Technology",
    "image_url": "https://example.com/images/search-engine.png",
    "likes": 49, "views": 470,
    "content": "Search engines crawl pages and build indexes to deliver fast results.",
    "created_at": "2025-01-27 14:14:14",
    "updated_at": "2025-01-27 14:14:14"
  },

  {
    "blog_id": 28, "user_id": 1,
    "title": "What is Caching?",
    "description": "Why caching speeds up applications.",
    "category": "Backend",
    "image_url": "https://example.com/images/cache.png",
    "likes": 28, "views": 260,
    "content": "Caching stores frequently used data to avoid repetitive computation.",
    "created_at": "2025-01-28 13:20:33",
    "updated_at": "2025-01-28 13:20:33"
  },

  {
    "blog_id": 29, "user_id": 1,
    "title": "Microservices vs Monoliths",
    "description": "Choosing the right architecture.",
    "category": "Backend",
    "image_url": "https://example.com/images/microservices.png",
    "likes": 66, "views": 620,
    "content": "Monoliths are simpler; microservices scale better.",
    "created_at": "2025-01-29 12:12:55",
    "updated_at": "2025-01-29 12:12:55"
  },

  {
    "blog_id": 30, "user_id": 1,
    "title": "Why Keyboard Shortcuts Matter",
    "description": "Save time and boost productivity.",
    "category": "Productivity",
    "image_url": "https://example.com/images/keyboard.png",
    "likes": 20, "views": 210,
    "content": "Shortcuts reduce friction and improve workflow speed.",
    "created_at": "2025-01-30 11:30:00",
    "updated_at": "2025-01-30 11:30:00"
  },

  {
    "blog_id": 31, "user_id": 1,
    "title": "Async vs Sync Programming",
    "description": "A simple explanation of concurrency models.",
    "category": "Programming",
    "image_url": "https://example.com/images/async.png",
    "likes": 39, "views": 330,
    "content": "Async programming prevents blocking operations.",
    "created_at": "2025-01-31 10:15:10",
    "updated_at": "2025-01-31 10:15:10"
  },

  {
    "blog_id": 32, "user_id": 1,
    "title": "Building a Portfolio That Gets Hired",
    "description": "What employers actually look for.",
    "category": "Career",
    "image_url": "https://example.com/images/portfolio.png",
    "likes": 74, "views": 900,
    "content": "Show real projects, not tutorials. Demonstrate thought process.",
    "created_at": "2025-02-01 09:45:55",
    "updated_at": "2025-02-01 09:45:55"
  },

  {
    "blog_id": 33, "user_id": 1,
    "title": "How Browsers Render Webpages",
    "description": "Painting, layout, and DOM explained.",
    "category": "Frontend",
    "image_url": "https://example.com/images/browser-render.png",
    "likes": 51, "views": 410,
    "content": "Rendering involves DOM creation, CSSOM, layout, and painting.",
    "created_at": "2025-02-02 14:10:10",
    "updated_at": "2025-02-02 14:10:10"
  },

  {
    "blog_id": 34, "user_id": 1,
    "title": "Understanding Memory Leaks",
    "description": "How bad code eats RAM.",
    "category": "Programming",
    "image_url": "https://example.com/images/memory-leak.png",
    "likes": 44, "views": 380,
    "content": "Memory leaks occur when unused data isn’t freed.",
    "created_at": "2025-02-03 13:33:33",
    "updated_at": "2025-02-03 13:33:33"
  },

  {
    "blog_id": 35, "user_id": 1,
    "title": "The Magic of Regex",
    "description": "Pattern matching for real hackers.",
    "category": "Programming",
    "image_url": "https://example.com/images/regex.png",
    "likes": 23, "views": 240,
    "content": "Regex helps match, replace, and validate complex patterns.",
    "created_at": "2025-02-04 10:22:00",
    "updated_at": "2025-02-04 10:22:00"
  },

  {
    "blog_id": 36, "user_id": 1,
    "title": "Intro to Machine Learning",
    "description": "Core ML concepts explained simply.",
    "category": "AI",
    "image_url": "https://example.com/images/ml.png",
    "likes": 91, "views": 1000,
    "content": "ML uses data to train models that make predictions.",
    "created_at": "2025-02-05 12:10:20",
    "updated_at": "2025-02-05 12:10:20"
  },

  {
    "blog_id": 37, "user_id": 1,
    "title": "Scaling Web Apps",
    "description": "Load balancing, caching, queues.",
    "category": "Backend",
    "image_url": "https://example.com/images/scale.png",
    "likes": 60, "views": 680,
    "content": "Scaling requires distributing load and optimizing bottlenecks.",
    "created_at": "2025-02-06 13:10:00",
    "updated_at": "2025-02-06 13:10:00"
  },

  {
    "blog_id": 38, "user_id": 1,
    "title": "Why Testing Matters",
    "description": "Unit, integration, and E2E tests.",
    "category": "Programming",
    "image_url": "https://example.com/images/testing.png",
    "likes": 46, "views": 420,
    "content": "Tests prevent regressions and increase confidence in code.",
    "created_at": "2025-02-07 10:00:10",
    "updated_at": "2025-02-07 10:00:10"
  },

  {
    "blog_id": 39, "user_id": 1,
    "title": "Understanding DNS",
    "description": "How the internet knows where to send you.",
    "category": "Networking",
    "image_url": "https://example.com/images/dns.png",
    "likes": 29, "views": 300,
    "content": "DNS converts domain names into IP addresses.",
    "created_at": "2025-02-08 09:15:22",
    "updated_at": "2025-02-08 09:15:22"
  },

  {
    "blog_id": 40, "user_id": 1,
    "title": "REST vs GraphQL",
    "description": "Choosing the right API style.",
    "category": "Backend",
    "image_url": "https://example.com/images/graphql.png",
    "likes": 72, "views": 820,
    "content": "GraphQL offers flexible queries; REST is simpler and mature.",
    "created_at": "2025-02-09 11:50:50",
    "updated_at": "2025-02-09 11:50:50"
  },

  {
    "blog_id": 41, "user_id": 1,
    "title": "How to Build Strong Habits",
    "description": "Small steps, big results.",
    "category": "Self-Improvement",
    "image_url": "https://example.com/images/habits.png",
    "likes": 80,
    "views": 900,
    "content": "Habits compound into massive long-term gains.",
    "created_at": "2025-02-10 10:20:00",
    "updated_at": "2025-02-10 10:20:00"
  },

  {
    "blog_id": 42, "user_id": 1,
    "title": "Learning C++ as a Beginner",
    "description": "A guide to starting low-level programming.",
    "category": "Programming",
    "image_url": "https://example.com/images/cpp.png",
    "likes": 53,
    "views": 480,
    "content": "C++ teaches memory, pointers, and performance optimization.",
    "created_at": "2025-02-11 12:00:33",
    "updated_at": "2025-02-11 12:00:33"
  },

  {
    "blog_id": 43, "user_id": 1,
    "title": "Why UI/UX Matters",
    "description": "Good design makes or breaks products.",
    "category": "Design",
    "image_url": "https://example.com/images/uiux.png",
    "likes": 45,
    "views": 390,
    "content": "Good UX removes friction and improves user satisfaction.",
    "created_at": "2025-02-12 09:10:15",
    "updated_at": "2025-02-12 09:10:15"
  },

  {
    "blog_id": 44, "user_id": 1,
    "title": "OAuth2 for Beginners",
    "description": "Authorization the modern way.",
    "category": "Backend",
    "image_url": "https://example.com/images/oauth.png",
    "likes": 61,
    "views": 570,
    "content": "OAuth2 allows apps to access user data securely via tokens.",
    "created_at": "2025-02-13 10:15:55",
    "updated_at": "2025-02-13 10:15:55"
  },

  {
    "blog_id": 45, "user_id": 1,
    "title": "Intro to Cloud Architecture",
    "description": "How modern apps are deployed.",
    "category": "Cloud",
    "image_url": "https://example.com/images/cloud-arch.png",
    "likes": 55,
    "views": 590,
    "content": "Cloud architectures use microservices, load balancers, and autoscaling.",
    "created_at": "2025-02-14 11:30:12",
    "updated_at": "2025-02-14 11:30:12"
  },

  {
    "blog_id": 46, "user_id": 1,
    "title": "What is a CDN?",
    "description": "Faster content delivery explained.",
    "category": "Networking",
    "image_url": "https://example.com/images/cdn.png",
    "likes": 22,
    "views": 250,
    "content": "CDNs store static assets closer to users for faster load times.",
    "created_at": "2025-02-15 14:14:55",
    "updated_at": "2025-02-15 14:14:55"
  },

  {
    "blog_id": 47, "user_id": 1,
    "title": "Building CLI Tools in Python",
    "description": "Create your own command-line programs.",
    "category": "Programming",
    "image_url": "https://example.com/images/python-cli.png",
    "likes": 49,
    "views": 370,
    "content": "Python's argparse makes building CLI tools easy and powerful.",
    "created_at": "2025-02-16 10:10:10",
    "updated_at": "2025-02-16 10:10:10"
  },

  {
    "blog_id": 48, "user_id": 1,
    "title": "How Cron Jobs Work",
    "description": "Automating recurring tasks.",
    "category": "DevOps",
    "image_url": "https://example.com/images/cron.png",
    "likes": 44,
    "views": 350,
    "content": "Cron uses a schedule expression to automate commands.",
    "created_at": "2025-02-17 09:05:22",
    "updated_at": "2025-02-17 09:05:22"
  },

  {
    "blog_id": 49, "user_id": 1,
    "title": "Why Code Reviews Matter",
    "description": "Better teams write better code.",
    "category": "Career",
    "image_url": "https://example.com/images/code-review.png",
    "likes": 58,
    "views": 600,
    "content": "Code reviews improve quality, share knowledge, and prevent bugs.",
    "created_at": "2025-02-18 15:15:15",
    "updated_at": "2025-02-18 15:15:15"
  },

  {
    "blog_id": 50, "user_id": 1,
    "title": "Understanding CPU vs GPU",
    "description": "Which one does what?",
    "category": "Technology",
    "image_url": "https://example.com/images/cpu-gpu.png",
    "likes": 76,
    "views": 850,
    "content": "CPUs handle general tasks; GPUs handle parallel computation efficiently.",
    "created_at": "2025-02-19 12:40:33",
    "updated_at": "2025-02-19 12:40:33"
  }
]

function getAllBlogsService(){
    return blogs;
}

function getBlogContent(id:string){
  const blog=blogs.filter((item)=>item.blog_id==id)
  return blog
}
export  {getAllBlogsService,getBlogContent}