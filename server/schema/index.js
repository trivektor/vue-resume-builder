import {gql} from 'apollo-server'

const PageInfo = `
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`

const Resume = `
  type Resume {
    id: ID!
    name: String
    description: String
    user_id: String
  }
`

const ResumeEdge = `
  type ResumeEdge {
    node: Resume
    cursor: String!
  }
`

const ResumeConnection = `
  type ResumeConnection {
    pageInfo: PageInfo!
    edges: [ResumeEdge!]!
  }
`

const Edges = `
  ${ResumeEdge}
`

const Connections = `
  ${ResumeConnection}
`

const ResumeInput = `
  input ResumeInput {
    name: String!
    description: String
  }
`

const MutationInputs = `
  ${ResumeInput}
`

const Mutation = `
  type Query {
    resumes: ResumeConnection
  }
  
  type Mutation {
    createResume(input: ResumeInput): Resume
  }
`;

const typeDefs = gql`
  ${Resume}
  ${PageInfo}
  ${Edges}
  ${Connections}
  ${MutationInputs}
  ${Mutation}
`

export {typeDefs as default}