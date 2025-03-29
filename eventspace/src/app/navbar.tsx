import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-tangelo p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            EventSpace
          </Link>
          <ul className="flex space-x-4">
               <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li> 
            <li>
              <Link href="/events" className="text-gray-300 hover:text-white">
                Events
              </Link>
            </li>
        
          </ul>
        </div>
      </nav>
      <main>
        <h1 className="text-3xl font-bold underline bg-blue-700 text-yellow-400 list-none">
          Hello world!
        </h1>
      </main>
    </div>
  );
}
