import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.module.css';
import "typeface-raleway"
import { UserHomePage } from './modules/pages/Home/';
import About from "./modules/pages/About/About.view"
import Post from "./modules/pages/post"
import NotFound from "./modules/pages/notfound"
import { Keepafloat } from './modules/pages/Keepafloat/index';
import PhotoGallery from './modules/pages/Home/components/PhotoGallery/PhotoGallery';
import BlogList from './Blog/components/BlogList/BlogList';
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={UserHomePage } />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path='/keepafloat' component={Keepafloat} />
            <Route exact path='/photogallery' component={PhotoGallery} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </div>
    </Router>, 
    document.getElementById('root')
);

