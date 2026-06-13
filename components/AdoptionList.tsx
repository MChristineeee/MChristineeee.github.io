interface AdoptionListProps {
  pets: string[];
}

export default function AdoptionList({
  pets,
}: AdoptionListProps) {
  return (
    <div>
      <h2>Adopted Pets</h2>

      {pets.length === 0 ? (
        <p>No pets adopted yet.</p>
      ) : (
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>{pet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}