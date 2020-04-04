const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

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
  description: 'get the particular employee',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the employee.',
    },
    employee_name: {
      type: GraphQLString,
      description: 'The name of the employee.',
    },
    employee_salary: {
      type: GraphQLString,
      description: 'The salary of the employee.',
    },
    employee_age: { type: GraphQLInt, description: 'The age of the employee.' },
  },
});

// Define the Root Query type
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root of all queries',
  fields: {
    allEmployee: {
      type: new GraphQLList(EmployeeType),
      resolve: (root) => employees,
    },
    employee: {
      type: EmployeeType,
      // `args` describes the arguments that the `employee` query accepts
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(root, args) {
        // Fetch the employee with Id `args.id`,
        return employees.find((emp) => emp.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
