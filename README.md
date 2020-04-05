# Build a CRUD App with Node.js and GraphQL

**Example GraphQL getAllEmployee query:**
```
query getAllEmployee {
  allEmployee {
    id
    employee_name
    employee_salary
  }
}
```

**Example getAllEmployee response:**
```json
{
  "data": {
    "allEmployee": [
      {
        "id": 1,
        "employee_name": "SathishKumar",
        "employee_salary": "320800"
      },
      {
        "id": 2,
        "employee_name": "Samson",
        "employee_salary": "170750"
      },
      {
        "id": 3,
        "employee_name": "David",
        "employee_salary": "86000"
      },
      {
        "id": 4,
        "employee_name": "Selvaraj",
        "employee_salary": "433060"
      },
      {
        "id": 5,
        "employee_name": "Steve Smith",
        "employee_salary": "162700"
      }
    ]
  }
}
```

**Example GraphQL getEmployeeById query:**
```
query getEmployeeById {
  employee(id: 1) {
    employee_name
    employee_salary
    employee_age
  }
}
```

**Example getAllEmployee response:**
```json
{
  "data": {
    "employee": {
      "employee_name": "SathishKumar",
      "employee_salary": "320800",
      "employee_age": 24
    }
  }
}
```

**Example GraphQL addEmployee mutation:**
```
mutation addMutation($input: EmployeeInput!) {
  addEmployee(input: $input) {
    id
    employee_name
    employee_salary
    employee_age
  }
}
```

**addEmployee Query Variables:**
``` json
{
  "input": {
    "employee_name": "Selvaraj123",
    "employee_salary": "433060",
    "employee_age": 49
  }
}
```

**Example addEmployee response:**
```json
{
  "data": {
    "addEmployee": {
      "id": 6,
      "employee_name": "Selvaraj123",
      "employee_salary": "433060",
      "employee_age": 49
    }
  }
}
```

**Example GraphQL updateEmployee mutation:**
```
mutation updateMutation {
  updateEmployee(id: 1, employee_name: "william", employee_salary: "232323", employee_age: 12) {
    id
    employee_name
    employee_salary
    employee_age
  }
}
```

**Example updateEmployee response:**
```json
{
  "data": {
    "updateEmployee": {
      "id": 1,
      "employee_name": "william",
      "employee_salary": "232323",
      "employee_age": 12
    }
  }
}
```

**Example GraphQL deleteEmployee mutation:**
```
mutation deleteMutation {
  deleteEmployee(id: 1) {
    id
    employee_name
    employee_salary
    employee_age
  }
}
```

**Example deleteEmployee response:**
```json
{
  "data": {
    "deleteEmployee": {
      "id": 1,
      "employee_name": "william",
      "employee_salary": "232323",
      "employee_age": 12
    }
  }
}
```
# Pre-requisites

Install NodeJS from [https://nodejs.org](https://nodejs.org)

# Cloning the Code

Clone the code using the following command

```bash
git clone https://github.com/sathishkumar63/first-graphql.git
```
# Running the Application

Install the npm packages using the following command 

```bash
npm install
```

Start the application using the following command 

```bash
node server.ts
```

The application runs on **localhost:3000/graphql**
