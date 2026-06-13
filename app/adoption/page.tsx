"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function AdoptionPage() {
  const searchParams = useSearchParams();

  const pet = searchParams.get("pet");
  const type = searchParams.get("type");
  const fee = searchParams.get("fee");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar title="Pet Adoption Center" />

      <div className="container">
        <h1>Adoption Form</h1>

        <div className="card">
          <h3>Selected Pet</h3>
          <p>Name: {pet}</p>
          <p>Type: {type}</p>
          <p>Adoption Fee: ${fee}</p>
        </div>

        {!submitted ? (
          <div className="form">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            <button onClick={handleSubmit}>
              Submit Adoption
            </button>
          </div>
        ) : (
          <h2>
            Congratulations! Your adoption request
            has been submitted. We will get back to you soon.
            please feel free to browse our page while you wait.
          </h2>
        )}
      </div>
    </main>
  );
}