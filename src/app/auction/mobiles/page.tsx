import AuctionHero from "@/components/AuctionPage/AuctionHero";
import Hero from "@/components/Landing/Hero";
import React from "react";

type Props = {};
const page = (props: Props) => {
    return <div className="px-4 md:px-16">
        <AuctionHero/>
    </div>;
};

export default page;
