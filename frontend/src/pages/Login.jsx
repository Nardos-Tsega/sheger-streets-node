import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        <h1 className="text-center text-4xl font-bold">Login</h1>
      </div>
      <div className="mt-4">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
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
          <button className="bg-black rounded text-white px-2 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
