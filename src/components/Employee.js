import React from "react";

export default function Employee(props) {
  return (
    <tr className="employee">
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.gender}</td>
    </tr>
  );
}
