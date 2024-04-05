export default function CreateAccount() {
  return (
    <div className="pageCenterCA">
      <div className="backgroundCA">
        <main className="flexContainerCA">
          <h1>Create your account</h1>
          <p>Profile image</p>
          <div className="fileContainerCA">
            <button className="btnSelectFileCA">Select File</button>
            <span>No file selected</span>
          </div>
          <p>Name</p>
          <input type="text" />
          <p>Username</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <p>Password Confirmation</p>
          <input type="password" />
          <button className="btnSignUpCA">Sign up</button>
        </main>
      </div>
    </div>
  );
}
