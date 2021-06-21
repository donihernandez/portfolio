import Link from "next/link";
import React from "react";

export const Navigation: React.FC = () => {
    return (
        <nav className="flex font-Nunito justify-evenly items-center h-16 bg-gray-900 text-white py-10">
            <div>
                <span className="font-bold"><span className="text-yellow-500">Doni</span> Hernández</span>
            </div>
            <div>
                <ul className="flex translate-y-0 space-x-6 items-center">
                    <li>
                        <Link href="#">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="">

            </div>
        </nav>
    );
}