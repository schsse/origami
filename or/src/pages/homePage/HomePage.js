import React from 'react'
// import styles from './index.module.css'

 //components
import PageLayout from '../../components/page-layout/PageLayout'
import Posts from '../../components/posts/Posts';
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









