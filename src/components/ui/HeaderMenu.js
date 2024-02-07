"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Computer Technology",
  },
  {
    title: "Civil Engineering",
  },
  {
    title: "Mechanical Engineering",
  },
  {
    title: "Electrical Engineering",
  },
  {
    title: "Computer Science Engineering",
  },
  {
    title: "Computer Science & Design",
  },
  {
    title: "Electronics Engineering",
  },
  {
    title: "Computer Science Engineering(IOT)",
  },
  {
    title: "CSE(Artificial Intelligence & Machine Learning)",
  },
  {
    title: "Electronics and Telecommunication Engineering",
  },
  {
    title: "Information Technology",
  },
  {
    title: "Artificial Intelligence And Data Science",
  },
];

export function HeaderMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PROGRAMS</NavigationMenuTrigger>
          <NavigationMenuContent className="w-max">
            <ul className="grid gap-3 p-5 w-[500px] grid-cols-2">
              {components.map((component) => (
                <p
                  key={component.title}
                  className="text-xs cursor-pointer hover:underline"
                >
                  {component.title}
                </p>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ADMISSIONS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-5 w-[500px] grid-cols-2">
              {components.map((component) => (
                <p
                  key={component.title}
                  className="text-xs cursor-pointer hover:underline"
                >
                  {component.title}
                </p>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>CAMPUS LIFE</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-5 w-[500px] grid-cols-2">
              {components.map((component) => (
                <p
                  key={component.title}
                  className="text-xs cursor-pointer hover:underline"
                >
                  {component.title}
                </p>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PLACEMENTS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-5 w-[500px] grid-cols-2">
              {components.map((component) => (
                <p
                  key={component.title}
                  className="text-xs cursor-pointer hover:underline"
                >
                  {component.title}
                </p>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ABOUT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-5 w-[500px] grid-cols-2">
              {components.map((component) => (
                <p
                  key={component.title}
                  className="text-xs cursor-pointer hover:underline"
                >
                  {component.title}
                </p>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
