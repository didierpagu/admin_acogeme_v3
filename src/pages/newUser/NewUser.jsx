import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Hogar</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre del hogar</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Telefono</label>
          <input type="text" placeholder="+57..." />
        </div>
        <div className="newUserItem">
          <label>Ciudad</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Localidad</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
