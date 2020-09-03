import React from 'react'
// import styles from './index.module.css'
import PageLayout from '../../components/page-layout/PageLayout'
import Title from '../../components/title/Title'
import SubmitButton from '../../components/button/SubmitButton'
import Posts from '../../components/posts/Posts'

const ShareThoughtsPage = () => {
  return(
    <PageLayout>
      <Title title="Share your thoughts..." />
      <textarea />
      <SubmitButton title="Publish" />
      <h3>Last three posts on your wall</h3>
      <Posts  />
    </PageLayout>
      )
}
export default ShareThoughtsPage