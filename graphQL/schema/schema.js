const graphql = require('graphql');
const axios = require('axios');
const songsdb = require('../db.json');
const playlist = require('../playlist.json');
const _ = require('lodash');
var {
  buildSchema
} = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const SongsSchema = new graphql.GraphQLObjectType({
  name: 'songs',
  description: 'Songs Database',
  fields: () => ({
    id: {
      type: graphql.GraphQLInt
    },
    album: {
      type: graphql.GraphQLString
    },
    duration: {
      type: graphql.GraphQLInt
    },
    title: {
      type: graphql.GraphQLString
    },
    artist: {
      type: graphql.GraphQLString
    }
  })
})

const query = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    SongsDB: {
      type: new GraphQLList(SongsSchema),
      args: {
        title: {
          type: graphql.GraphQLString
        }
      },
      resolve: (parent, args) => {
        if (!args.title) {
          return songsdb;
        }
        return songsdb.filter(user => {
          if (user.title.toLowerCase().includes(args.title.toLowerCase())) {
            return user;
          }
        });
      }
    },
    getAlbums: {
      type: new GraphQLList(SongsSchema),
      resolve: () => songsdb
    }
  }
})

const mutation = new graphql.GraphQLObjectType({
  name: 'songsMutation',
  fields: {
    create: {
      type: SongsSchema,
      args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        album: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        duration: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        artist: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        title: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
      },
      resolve: (_, {
        carname,
        year,
        transmission,
        fuelType,
        engineCapacity
      }) => {
        let v = new vehicle({
          carname,
          year,
          transmission,
          fuelType,
          engineCapacity
        });
        return v.save()
      }
    },
    delete: {
      type: SongsSchema,
      args: {
        _id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: (_, {
        _id
      }) => {
        return vehicle.findOneAndRemove(_id);
      }
    }
  }
})

module.exports = new graphql.GraphQLSchema({
  query,
  mutation
})