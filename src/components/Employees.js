import React from "react";
import Employee from "./Employee";

export default function Employees(props) {
  const employeesList = props.employees
    .filter(props.filter)
    .map((employee) => (
      <Employee
        id={employee.login.uuid}
        first_name={employee.name.first}
        last_name={employee.name.last}
        phone={employee.phone}
        gender={employee.gender}
        key={employee.login.uuid}
      />
    ));

  return (
    <div>
      <table
        width="100%"
        border="1"
        className="employee-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <thead>
          <tr className="employee">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
          </tr>
          {employeesList}
        </thead>
      </table>
    </div>
  );
}
