"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import PetCard from "../../components/PetCard";

export default function PetsPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const pets = [
    {
      name: "Chase",
      age: 2,
      type: "Dog",
      fee: 150,
      image:
        "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg",
    },
    {
      name: "Scarlette",
      age: 1,
      type: "Cat",
      fee: 120,
      image:
        "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    },
    {
      name: "Cookie",
      age: 3,
      type: "Dog",
      fee: 180,
      image:
        "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
    },
    {
      name: "Pookie",
      age: 4,
      type: "Cat",
      fee: 100,
      image:
        "https://cdn2.thecatapi.com/images/bpc.jpg",
    },
  ];

  const adoptPet = (
    name: string,
    type: string,
    fee: number
  ) => {
    setMessage(`${name} selected for adoption!`);

    router.push(
      `/adoption?pet=${name}&type=${type}&fee=${fee}`
    );
  };

  return (
    <main>
      <Navbar title="Pet Adoption Center" />

      <div className="container">
        <h1>Available Pets</h1>

        {message && <p>{message}</p>}

        <div className="pet-grid">
          {pets.map((pet) => (
            <PetCard
              key={pet.name}
              name={pet.name}
              age={pet.age}
              type={pet.type}
              fee={pet.fee}
              image={pet.image}
              onAdopt={() =>
                adoptPet(
                  pet.name,
                  pet.type,
                  pet.fee
                )
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}