import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
    }}

    id="header-section"
  >

    <Helmet>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="NDQxOTA5OGUtZGZkYi00YjRjLTg3YWMtODg0NGRjNWZlNmZiNjM3Mzg0Nzg5MjEyMDgzNjQ3" />
    </Helmet>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `37px 1.0875rem`,
        textAlign : `center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#25667f`,
            textDecoration: `none`,
            fontSize : "3rem",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
