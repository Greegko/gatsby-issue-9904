import { graphql } from 'gatsby';

const Index = ({ data: { allContentfulTest: { edges: [{ node }] } } }) => node.name + ' / '+ node.labels.join(' - ');

export default Index

export const pageQuery = graphql`
  query {
    allContentfulTest {
      edges {
        node {
          name
          labels
          hiddenLabels
        }
      }
    }
  }
`