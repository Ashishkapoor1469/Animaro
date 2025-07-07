"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const paths = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
  ];

  const container = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useGSAP(
    () => {
      gsap.set(".menu-link-item", { y: 75 });

      tl.current = gsap.timeline({
        paused: true,
        onStart: () => {
          void gsap.set(".menu-overlay", { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
          void gsap.set(".menu-overlay", { pointerEvents: "none" });
        },
      });

      tl.current
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item",
          {
            duration: 1.2,
            y: 0,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "<"
        );

      return () => tl.current?.kill();
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return; // fine – this *is* a statement
    if (menuOpen) {
      tl.current.play(); // explicit call – linter happy
    } else {
      tl.current.reverse();
    }
  }, [menuOpen]);

  return (
    <div ref={container}>
      {/* Top Menu Bar */}
      <div className="menu-bar fixed top-0 left-0 w-full p-8 flex justify-between items-center z-20">
        <div className="menu-logo text-4xl font-semibold">
          <Link href="/">Ashish</Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
       <Button className="hover:scale-105" variant={"secondary"}>Menu</Button>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className="menu-overlay fixed top-0 left-0 w-full h-full bg-[#86b99c] flex flex-wrap items-center justify-between px-8 md:px-16 py-8
        [clip-path:polygon(0_0,0_0,0_0,0_0)] pointer-events-none z-10"
      >
        {/* Center Section */}
        <div className="menu flex flex-col h-full justify-evenly items-center">
          {/* Links */}
          <div className="menulinks flex flex-col gap-2">
            {paths.map((R, i) => (
              <div className="menu-link-item " key={i}>
                <div className="menu-item-holder" onClick={toggleMenu}>
                  <Link
                    href={R.path}
                    className="menu-links text-black text-5xl md:text-7xl  font-thin hover:text-white transition-all duration-500"
                  >
                    {R.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="menuinfo flex flex-col ">
            <div className="menu-info-col">
              <p>
                <span className="menu-info-title">
                  Ashish Kumar
                </span>
                <br />
                <span className="menu-info-subtitle">Full Stack Developer</span>
              </p>
            </div>
            <div className="menu-info-col">
              <p>
                <span className="menu-info-title">Contact</span>
                <br />
                <span className="menu-info-subtitle">
                  Email:{" "}
                  <a
                    href="mailto:kapoorashish713@gmail.com"
                    className="underline"
                  >
                    kapoorashish713@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className="menu-preview w-auto h-full justify-center items-center flex">
          <p className="text-black text-lg font-medium">View preview</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
