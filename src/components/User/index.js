const User = props => {
  const {userDetails} = props
  const {id, name, dob, designation} = userDetails
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{designation}</td>
    </tr>
  )
}

export default User
