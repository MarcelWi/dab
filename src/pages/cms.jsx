import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

class CMSRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            {/*{items}*/}
            <p>Das ist ein Test</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CMSRoute;

export const pageQuery = graphql`
  query CMSQuery {
    site {
      siteMetadata {
        title
        subtitle
        menu {
          label
          path
        }
      }
    }
    allPrismicDocument(filter: {type: {eq: "home"}}) {
    edges {
      node {
        id
        type
      }
    }
  }    
  }
`;
