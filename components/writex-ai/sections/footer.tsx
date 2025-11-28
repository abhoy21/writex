import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background text-center border-t border-border">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <Link href="https://www.abhoy.xyz/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Abhoy Sarkar</Link>
        </p>
        <nav className="flex gap-4">
          <Link href="/" className="text-sm hover:underline text-foreground">Privacy Policy</Link>
          <Link href="/about" className="text-sm hover:underline text-foreground">About</Link>
          <Link href="/contact" className="text-sm hover:underline text-foreground">Terms of Service</Link>
          
        </nav>
      </div>
    </footer>
  );
}
