"use client";
import React from "react";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarMenuItem
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Skills",
        "Services",
        "Projects",
        "Experience",
        "Contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true} className="sticky dark top-0 z-50 bg-background/10 backdrop-saturate-10">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    {/*<AcmeLogo />*/}
                    <p className="font-bold text-inherit">JAS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive>
                    <Link  aria-current="page" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="dark bg-background/10 backdrop-saturate-10">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 0 ? "primary" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
