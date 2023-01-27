import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const onSubmit = () => {};

  return (
    <div className="max-w-4xl mx-auto container flex flex-col">
      <div className="mx-auto">
        <h1 className="text-center text-4xl font-bold">Register</h1>
      </div>
      <div className="mt-4">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={onChange}
            className="border px-2 py-2 "
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
            className="border px-2 py-2 "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
            className="border px-2 py-2 "
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={onChange}
            className="border px-2 py-2 "
          />
          <button className="bg-black rounded text-white px-2 py-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
