import Image from "next/image";
import Link from "next/link";

export default function Navigation(){
    return(
        <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
            <div className="flex items-center gap-8">
                <Link href="/">
                    <Image
                        src="/next.svg"
                        alt="Logo"
                        width={100}
                        height={24}
                        className="invert"
                        />
                </Link>

                <div className="flex gap-6">
                    <Link href="/" className="text-white hover:text-gray-200">
                        Home
                    </Link>
                    <Link href="/page1" className="text-white hover:text-gray-200">
                        Counter
                    </Link>
                    <Link href="/page2" className="text-white hover:text-gray-200">
                        Rectangle
                    </Link>
                </div>
            </div>
        </nav>
    );
}