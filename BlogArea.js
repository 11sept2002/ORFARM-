import React from 'react';
import './BlogArea.css'; // Assuming the CSS file is named 'BlogArea.css'

const BlogArea = () => {
  return (
    <section className="blog-area pt-100 pb-100 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="tpsection mb-35">
              <h4 className="tpsection__sub-title">~ Read Our Blog ~</h4>
              <h4 className="tpsection__title">Our Latest Post</h4>
              <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
            </div>
          </div>
        </div>
        <div className="swiper-container tpblog-active">
          <div className="swiper-wrapper">
            {/* Blog post slides */}
            {blogPosts.map((post, index) => (
              <div className="swiper-slide" key={index}>
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href={post.url}><img src={post.image} alt={post.title} /></a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links"><a href={post.categoryUrl}>{post.category}</a></span>
                      <span className="author-by"><a href="index.html">{post.author}</a></span>
                      <span className="post-data"><a href="index.html">{post.date}</a></span>
                    </div>
                    <h4 className="tpblog__title"><a href={post.url}>{post.title}</a></h4>
                    <p>{post.excerpt}</p>
                    <div className="tpblog__details">
                      <a href={post.url}>Continue reading <i className="icon-chevrons-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const blogPosts = [
  {
    title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
    image: 'assets/img/blog/blog-bg-1.jpg',
    category: 'Lifestyle',
    categoryUrl: 'shop-details.html',
    author: 'Admin',
    date: 'SEP 15. 2022',
    excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...',
    url: 'blog-details.html',
  },
  {
    title: 'The Best Great Benefits Of Fresh Beef For Women\'s Health',
    image: 'assets/img/blog/blog-bg-2.jpg',
    category: 'Organics',
    categoryUrl: 'shop-details.html',
    author: 'Admin',
    date: 'SEP 15. 2022',
    excerpt: 'These are the people who make your life easier. Egestas is tristique vestibulum...',
    url: 'blog-details.html',
  },
  // Add other blog posts here as needed
];

export default BlogArea;
