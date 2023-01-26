export default function Header() {
  return (
    <div className=" py-4 flex justify-between">
      <div>
        <h1>sheger-streets</h1>
      </div>
      <div className="flex gap-4">
        <button className="border rounded-full px-8 py-2">Login</button>
        <button className="border rounded-full px-8 py-2">Register</button>
      </div>
    </div>
  );
}
