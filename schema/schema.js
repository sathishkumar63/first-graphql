const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const employees = [
  {
    id: '1',
    employee_name: 'Tiger Nixon',
    employee_salary: '320800',
    employee_age: 61,
  },
  {
    id: '2',
    employee_name: 'Garrett Winters',
    employee_salary: '170750',
    employee_age: 63,
  },
  {
    id: '3',
    employee_name: 'Ashton Cox',
    employee_salary: '86000',
    employee_age: 66,
  },
  {
    id: '4',
    employee_name: 'Cedric Kelly',
    employee_salary: '433060',
    employee_age: 22,
  },
  {
    id: '5',
    employee_name: 'Airi Satou',
    employee_salary: '162700',
    employee_age: 33,
  },
  {
    id: '6',
    employee_name: 'Brielle Williamson',
    employee_salary: '372000',
    employee_age: 61,
  },
  {
    id: '7',
    employee_name: 'Herrod Chandler',
    employee_salary: '137500',
    employee_age: 59,
  },
  {
    id: '8',
    employee_name: 'Rhona Davidson',
    employee_salary: '327900',
    employee_age: 55,
  },
];

// Define the Employee type
const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: {
    id: { type: GraphQLString },
    employee_name: { type: GraphQLString },
    employee_salary: { type: GraphQLString },
    employee_age: { type: GraphQLInt },
  },
});

// Define the Root Query type
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    employee: {
      type: EmployeeType,
      // `args` describes the arguments that the `employee` query accepts
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return employees.find((emp) => emp.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
