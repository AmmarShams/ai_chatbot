import { useState } from "react";

interface Props {
  setUserData: (data: { name: string; email: string }) => void;
}

function UserForm({ setUserData }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setUserData({ name, email });
    } catch (err) {
      console.log("There was an error sending UserData to App.tsx", err);
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 " style={{ marginLeft: "20px" }}>
        <p className="form-intro ">
          👋 Please enter your name and email to get started.
        </p>{" "}
        <form className="col-md-4 offset-md-5 " onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              required
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Yusuf"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <button type="submit" className="btn btn-primary arrow-btn">
            <i className="bi bi-arrow-right"></i>
          </button>{" "}
        </form>
      </div>
      <div className="col-md-2 mt-4"></div>
    </div>
  );
}

export default UserForm;
