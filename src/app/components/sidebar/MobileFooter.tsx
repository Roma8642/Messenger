'use client';
import React from 'react';
import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "@/app/components/sidebar/MobileItem";

const MobileFooter = () => {
    const routes = useRoutes()
    const {isOpen} = useConversation()
   if(isOpen) return null
    return (

            <div
            className="
            fixed
            bg-white
            w-full
            bottom-0
            flex
            justify-between
            items-center
            h-[60px]
            px-4
            lg:hidden
            "
            >
            {routes.map((route) => (
                <MobileItem
                    key={route.label}
                    href={route.href}
                    label={route.label}
                    icon={route.icon}
                    active={route.active}
                    onClick={route.onClick}
                />
            ))}
        </div>


    )};


export default MobileFooter;