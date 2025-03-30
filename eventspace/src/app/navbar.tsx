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
              <Link href="/" className="text-hunyadi-yellow hover:text-white">
                Home
              </Link>
            </li>
               <li>
              <Link href="/about" className="text-hunyadi-yellow hover:text-white">
                About
              </Link>
            </li> 
            <li>
              <Link href="/events" className="text-hunyadi-yellow hover:text-white">
                Events
              </Link>
            </li>
        
          </ul>
        </div>
      </nav>
    </div>
  );
}
