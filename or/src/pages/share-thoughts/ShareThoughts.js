import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout/PageLayout'
import Title from '../../components/title/Title'
import SubmitButton from '../../components/button/SubmitButton'
import Posts from '../../components/posts/Posts'

const ShareThoughtsPage = () => {
  return(
    <PageLayout>
      <div className={styles.input}>
        <div>
          <Title title="Share your thoughts..." />
          <textarea />
          <SubmitButton title="Publish" />
        </div>
        <div>
          <h3>Last three posts on your wall</h3>
          <Posts  />
        </div>
      </div>
    </PageLayout>
      )
}
export default ShareThoughtsPage