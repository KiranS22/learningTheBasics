import "./Display.css";

const ShowUser = ({ users }) => {
  return (
    <>
      <div className="display-wrap">
        <div className="user-info">
          <h3>First Name:</h3> <p>{users.firstName}</p>
        </div>
        <div className="user-info">
          {" "}
          <h3>Last Name:</h3> <p>{users.lastName}</p>
        </div>
        <div className="user-info">
          <h3>Email Address:</h3> <p>{users.email}</p>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
