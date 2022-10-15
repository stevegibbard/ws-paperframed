import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PhotographyPage = () => (
  <Layout>
    <h1>Photography</h1>
    <p>Portraits</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Photography" />

export default PhotographyPage
