const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');

inputMovieType = new GraphQLInputObjectType({
    name: 'MovieInput',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }

    }
});

exports.inputMovieType = inputMovieType;
