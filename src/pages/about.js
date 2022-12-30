// Step 1: Import React
import * as React from 'react'
import { Link }  from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo' 
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
       <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component

export const Head = () => <Seo title="About me" />

export default AboutPage