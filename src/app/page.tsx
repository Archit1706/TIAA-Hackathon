import Image from "next/image";

import CTA from "../../components/Landing/CTA";
import Features from "../../components/Landing/Features";
import Hero from "../../components/Landing/Hero";
import Testimonials from "../../components/Landing/Testimonials";
import Category from "@/components/Landing/Category";

export default function Home() {
    return (
        <main className="dark:text-blue-400 text-green-400">
            Landing Page
            <Hero />
            <Category />
            <CTA />
            <Features />
            <Testimonials />
        </main>
    );
}
