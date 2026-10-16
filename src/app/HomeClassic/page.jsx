import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footers from "@/components/layouts/Footers";
import {
  PhoneIncoming,
  Clock3,
  AlertCircle,
} from "lucide-react";

export default function TopHeader() {
  return (
    <>
    <section className="hidden lg:block border-b ">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between cursor-pointer">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="https://demo.ovathemewp.com/egovt/wp-content/uploads/2020/07/Logo_black_text-1.svg"
                alt="Logo"
                className="w-32"
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-10">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex h-15 w-12 items-center justify-center   text-orange-600">
                <PhoneIncoming size={27} />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Have Issues?
                </p>

                <a
                  href="tel:18001234567"
                  className="font-sans hover:text-orange-600 text-gray-600 text-xl"
                >
                  1800 123 4567
                </a>
              </div>
            </div>

            {/* Open Hours */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center  text-orange-600">
                <Clock3 size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Open Hours
                </p>
 
                <p className="text-base text-gray-600">
                  Mon - Fri 8.00 am - 6.00 pm
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/contact1"
              className="border-2 p-3 border-blue-600 text-blue-600 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                
                Report an Issues
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Navbar />
    <Footers/>
    </>
  );
}