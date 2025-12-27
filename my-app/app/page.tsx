import Image from "next/image";
import Menu from '../components/Menu'
import FruitsList from '../components/FruitsList'

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen">
        <FruitsList />
      </main>
    </>
  );
}
