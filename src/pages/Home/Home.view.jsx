import React from 'react';

import Layout from '../../components/Layout/Layout';
import EWV from './components/EWV/EWV';
import Hero from './components/Hero/Hero';
// import LatestBlog from './components/LatestBlog/LatestBlog';

// import PhotoGallery from './components/PhotoGallery/PhotoGallery';




export default function HomePageView({ children }) {

  
  return (
    <Layout >
     
      <Hero img="/img/heroimage.jpg" centerText="Welcome to SV Sea Senora " location="WorldWide."font-family=" 'Luminari', sans-serif;"/>
      {/* <VideoHome centerText="Plan Your Next Adventure" location="Parisian Bridge, Paris, France" /> */}
       <EWV /> 
      {/* <PopularPlaces /> */}
      {/* <LatestBlog data={blogList}/>
      <PhotoGallery /> */}
      {/* <SummerCards /> */}
    
    </Layout>

  );
}
