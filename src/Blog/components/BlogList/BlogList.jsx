import React from 'react';

import PostList from "../../../components/postlist";
import Layout from '../../../modules/components/Layout/Layout';
import styles from './BlogList.module.css';
import Hero from "../../../modules/pages/Home/components/Hero/Hero";
export default function BlogList() {

  
  
  return (
    <Layout>
       <Hero img="/img/train.jpg" centerText="Sv Sea Senora, " subheading="We Write Travel Blogs On The Most Stunning Locations On Earth." location="Glenfinnan Viaduct, Glenfinnan, United Kingdom"/>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Blogs</h1>
        <PostList />
        {/* <div className={styles.blogList}>
          {blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
            <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
          ))}
        </div>
        <div className={styles.loadMore}> <h1>Under Construction Check Back Soon</h1>
          {/* <button onClick={loadMoreItems}  id="hidebutton">Load More</button> 
        </div> */}
      </div>
    </div>
    </Layout>
  );
}