import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PhotographyPage = () => (
  <Layout pageTitle="Photography">
    <p>Portraits</p>
  </Layout>
)

export const Head = () => <Seo title="Photography" />

export default PhotographyPage
