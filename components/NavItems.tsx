'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // ensures pathname comparisons happen on client only
    }, []);

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => {
                const isActive = mounted && pathname === href;
                return (
                    <Link
                        href={href}
                        key={label}
                        className={cn(isActive && 'text-primary font-semibold')}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavItems;
