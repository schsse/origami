import React, { Component } from 'react'
import styles from './index.module.css'
import axios from 'axios';

 //components
// import Posts from '../../components/posts/Posts'
import PageLayout from '../../components/page-layout/PageLayout'
import Post from '../../components/post/Post'
import Posts from '../../components/posts/Posts';
import Nada from '../../components/nada/Nada';
import Title from '../../components/title/Title';

const HomePage = ()=> {
      return(
        <PageLayout>
            <Title title="Home Page" />
            <Posts />
        </PageLayout>
      )
}
export default HomePage









