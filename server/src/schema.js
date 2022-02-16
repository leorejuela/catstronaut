const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        "the tack's title"
        title: String!
        "the track's main author"
        author: Author!
        "the track's main illustration to display in track card or track page detail"
        thumbnail: String
        "the tracks' approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        modulesCount: Int
        "the track's complete description, can be in Markdown format"
        description: String
        "the number of times a track has been viewed"
        numberOfViews: Int
        "the track's complete array of Modules"
        modules: [Module!]!
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }

    "A Module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        "the Module's title"
        title: String!
        "the Module's length in minutes"
        length: Int
    }
`;
module.exports = typeDefs;