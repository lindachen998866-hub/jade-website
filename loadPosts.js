// loadPosts.js
import { client } from "./sanity.js"; // 這是我們第一步做的 sanity.js

// 這行是 GROQ 查詢語法，意思是抓所有 post 的 title 和 content
const query = `*[_type == "post"]{_id, title, content}`;

// 抓資料
client.fetch(query).then((posts) => {
  const container = document.getElementById("posts"); // HTML 裡要有這個 <div>
  if (!container) return;

  // 將每篇文章加進 container
  container.innerHTML = posts
    .map((p) => `<h2>${p.title}</h2><p>${p.content}</p>`)
    .join("");
});
