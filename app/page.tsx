import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar title="Pet Adoption Center" />

      <div className="container">
        <h1>Welcome to the Pet Adoption Center</h1>

        <p>
          Find your perfect companion and give a loving
          pet a forever home.
        </p>
      </div>
    </main>
  );
}