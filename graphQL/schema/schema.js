const graphql = require('graphql');
const axios = require('axios');
const vehicle = require('../db.json');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

//important to define Company Type above User Type
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    users: {
      // GraphQLList - when we go com Company to User, it tells GraphQL that we will have a multiple users associated that one company
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(res => res.data);
      }
    }
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
      _id: {type: graphql.GraphQLString},
      firstName: {type: graphql.GraphQLString},
      age: {type: graphql.GraphQLInt}
  }
});

const VehicleSchema = new graphql.GraphQLObjectType({
  name: 'vehicle',
  description: 'a vehicle to be sold',
  fields: {
      _id: {type: graphql.GraphQLString},
      carname: {type: graphql.GraphQLString},
      year: {type: graphql.GraphQLInt},
      transmission: {type: graphql.GraphQLString},
      fuelType: {type: graphql.GraphQLString},
      engineCapacity: {type: graphql.GraphQLInt}
  }
})

const query = new graphql.GraphQLObjectType({
  name: 'vehicleQuery',
  fields: {
      vehicle: {
          type: new graphql.GraphQLList(VehicleSchema),
          args: {
              _id: {type: graphql.GraphQLString},
              carname: {type: graphql.GraphQLString}
          },
          resolve: (_, {_id, carname}) => {
              let where;
              if (_id){
                  where = {_id: _id};
              }else if (carname){
                  where = {carname: carname};
              }else{
                  where = {};
              }
              return vehicle.find(where);
          }
      },
      getByCapacity: {
          type: new graphql.GraphQLList(VehicleSchema),
          args: {
              capacity: {type: graphql.GraphQLInt}
          },
          resolve: (_, {capacity}) => {
              let where;
              if (capacity){
                  where = {engineCapacity: { $lt: capacity }};
              }else{
                  where = {};
              }
              return vehicle.find(where);
          }
      }
  }
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
          return db;
      }
    }
  }
});

/*
- Explanation:
  - You can ask me (the RootQuery) about users in the applicaiton
  - If you give me (args) the id of the user that you are looking for, I will return a user (UserType) back to you
- Resolve function
  - takes in two arguments - parentValue, args
  - Purpose: if you are looking for a User with an ID of 23, okay I will do my best to find it
  - it is where we actually go into our database and find the data that we are actually looking for
  - parentValue: never really used, ignore it
*/

const mutation = new graphql.GraphQLObjectType({
  name: 'vehicleMutations',
  fields: {
      create: {
          type: VehicleSchema,
          args: {
              carname: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
              year: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)},
              transmission: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
              fuelType: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
              engineCapacity: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)},
          },
          resolve: (_, {carname, year, transmission, fuelType, engineCapacity}) => {
              let v = new vehicle({carname, year, transmission, fuelType, engineCapacity});
              return v.save()
          }
      },
      delete: {
          type: VehicleSchema,
          args: {
              _id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
          },
          resolve: (_, {_id}) => {
              return vehicle.findOneAndRemove(_id);
          }
      }
  }
})


module.exports = new graphql.GraphQLSchema({
  query,
  mutation
})
