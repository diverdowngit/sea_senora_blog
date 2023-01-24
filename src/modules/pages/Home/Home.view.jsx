import React from 'react';

import Layout from '../../components/Layout/Layout';
 import EWV from './components/EWV/EWV';
import Hero from '../Home/components/Hero/Hero';
//  import LatestBlog from './components/LatestBlog/LatestBlog';
import PostList from "../../../components/postlist";
// import PhotoGallery from './components/PhotoGallery/PhotoGallery';




export default function HomePageView({ children }) {

  
  return (
    <Layout >
     
      <Hero img="/img/heroimage.jpg" centerText="Welcome to SV Sea Senora " location="WorldWide."font-family=" 'Luminari', sans-serif;"/>
      {/* <VideoHome centerText="Plan Your Next Adventure" location="Parisian Bridge, Paris, France" /> */}
        <EWV />  
        <PostList/>
      {/* <PopularPlaces /> */}
       {/* <LatestBlog data={PostList}/> */}
      {/* <PhotoGallery />  */}
      {/* <SummerCards /> */}
    
    </Layout>

  );
}
