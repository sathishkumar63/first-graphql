import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

const employees = [
  {
    id: 1,
    employee_name: 'SathishKumar',
    employee_salary: '320800',
    employee_age: 24
  },
  {
    id: 2,
    employee_name: 'Samson',
    employee_salary: '170750',
    employee_age: 21
  },
  {
    id: 3,
    employee_name: 'David',
    employee_salary: '86000',
    employee_age: 19
  },
  {
    id: 4,
    employee_name: 'Selvaraj',
    employee_salary: '433060',
    employee_age: 49
  },
  {
    id: 5,
    employee_name: 'Steve Smith',
    employee_salary: '162700',
    employee_age: 30
  }
];

const inputEmployeeType = new GraphQLInputObjectType({
  name: 'EmployeeInput',
  description: 'required inputs for creating employee',
  fields: {
    employee_name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the employee.'
    },
    employee_salary: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The salary of the employee.'
    },
    employee_age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The age of the employee.'
    }
  }
});

// Define the Employee type
const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  description: 'get the particular employee',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the employee.'
    },
    employee_name: {
      type: GraphQLString,
      description: 'The name of the employee.'
    },
    employee_salary: {
      type: GraphQLString,
      description: 'The salary of the employee.'
    },
    employee_age: { type: GraphQLInt, description: 'The age of the employee.' }
  }
});

// Define the Root Query type
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root of getAll and get employee queries',
  fields: {
    allEmployee: {
      type: new GraphQLList(EmployeeType),
      resolve: () => employees
    },
    employee: {
      type: EmployeeType,
      // `args` describes the arguments that the `employee` query accepts
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(root, args) {
        // Fetch the employee with Id `args.id`,
        const employee = employees.find((emp) => emp.id === args.id);
        if (!employee) {
          throw new Error('Employee does not exist!');
        } else {
          return employee;
        }
      }
    }
  }
});

// Define the Mutation query type

const MutationQueryType = new GraphQLObjectType({
  name: 'MutationQuery',
  description: 'The root of add, update and delete queries',
  fields: {
    updateEmployee: {
      type: EmployeeType,
      description: 'Update the employee',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'The id of the employee.'
        },
        employee_name: {
          type: GraphQLString,
          description: 'The name of the employee.'
        },
        employee_salary: {
          type: GraphQLString,
          description: 'The salary of the employee.'
        },
        employee_age: {
          type: GraphQLInt,
          description: 'The age of the employee.'
        }
      },
      resolve: (root, args) => {
        const employee = employees.find((emp) => emp.id === args.id);
        if (!employee) {
          throw new Error('Employee does not exist!');
        } else {
          if (typeof args.employee_name === 'string') {
            employee.employee_name = args.employee_name;
          }
          if (typeof args.employee_salary === 'string') {
            employee.employee_salary = args.employee_salary;
          }
          if (typeof args.employee_age === 'number') {
            employee.employee_age = args.employee_age;
          }
          return employee;
        }
      }
    },
    deleteEmployee: {
      type: EmployeeType,
      description: 'Delete the employee',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'The id of the employee.'
        }
      },
      resolve: (root, args) => {
        const isEmployeeExists = employees.findIndex(
          (employee) => employee.id === args.id
        );
        if (isEmployeeExists === -1) {
          throw new Error('Employee does not exist!');
        } else {
          // splice will return the removed items from the array object
          const deletedEmployee = employees.splice(isEmployeeExists, 1);
          return deletedEmployee[0];
        }
      }
    },
    addEmployee: {
      type: EmployeeType,
      description: 'Create the employee',
      /* define the arguments that we should pass to the mutation here
      we require both employee name, salary and age. the id will be generated automatically */
      args: {
        input: { type: new GraphQLNonNull(inputEmployeeType) }
      },
      resolve: (root, args) => {
        const employeeExists = employees.some(
          (employee) => employee.employee_name === args.input.employee_name
        );
        if (employeeExists) {
          throw new Error('Employee already exist!');
        } else {
          const employee = {
            id: employees.length + 1,
            employee_name: args.input.employee_name,
            employee_salary: args.input.employee_salary,
            employee_age: args.input.employee_age
          };
          employees.push(employee);
          return employee;
        }
      }
    }
  }
});

// Define the Schema
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationQueryType
});

export default schema;
