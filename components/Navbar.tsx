import Link from "next/link";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="navbar">
      <h2>{title}</h2>

      <div>
        <Link href="/">Home</Link>
        <Link href="/pets">Pets</Link>
        <Link href="/adoption">Adoption</Link>
      </div>
    </nav>
  );
}