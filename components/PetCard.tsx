interface PetCardProps {
  name: string;
  age: number;
  type: string;
  fee: number;
  image: string;
  onAdopt: () => void;
}

export default function PetCard({
  name,
  age,
  type,
  fee,
  image,
  onAdopt,
}: PetCardProps) {
  return (
    <div className="card">
      <img src={image} alt={name} className="pet-image" />

      <h3>{name}</h3>

      <p>Type: {type}</p>
      <p>Age: {age}</p>
      <p>Adoption Fee: ${fee}</p>

      <button onClick={onAdopt}>
        Adopt
      </button>
    </div>
  );
}