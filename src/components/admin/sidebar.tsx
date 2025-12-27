"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHome, FiFileText, FiList, FiTag, FiChevronDown, FiUser, FiCodepen } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const navItems = [
    { label: "Dashboard", href: "/admin", icon: FiHome },
    { label: "Pages", href: "/admin/pages", icon: FiFileText },
    { label: "Menus", href: "/admin/menus", icon: FiList },
    { label: "Offers", href: "/admin/offers", icon: FiTag },
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("rms:sidebarCollapsed") === "true";
    });

    useEffect(() => {
        localStorage.setItem("rms:sidebarCollapsed", String(collapsed));
    }, [collapsed]);

    return (
        <aside
            className={`bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-200 border-r border-neutral-200 dark:border-neutral-800 flex flex-col transition-all duration-200 ease-in-out ${collapsed ? "w-16" : "w-64"
                } h-screen shrink-0`}
            aria-expanded={!collapsed}
        >
            <div className="flex items-center justify-between px-3 h-16 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                    <FiCodepen className={`text-rose-600 ${collapsed ? "w-6 h-6" : "w-7 h-7"}`} size={collapsed ? 20 : 24} />
                    {!collapsed && <span className="font-semibold">Admin</span>}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    aria-expanded={!collapsed}
                    onClick={() => setCollapsed((s) => !s)}
                    className="p-1"
                >
                    <FiChevronDown className={`transform transition-transform duration-200 rotate-90 ${collapsed ? "rotate-270" : ""}`} size={18} />
                </Button>
            </div>

            <nav className="flex-1 overflow-auto">
                <ul className="p-2 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon as any;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${collapsed ? "justify-center" : ""
                                        }`}
                                >
                                    <Icon className="text-neutral-500" size={20} />
                                    {!collapsed && <span className="truncate">{item.label}</span>}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="px-3 py-2 border-t border-neutral-200 dark:border-neutral-800">
                <Button
                    variant="ghost"
                    className={`w-full ${collapsed ? "justify-center" : "justify-start"} flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200`}
                    onClick={() => alert("User actions go here")}
                >
                    <FiUser className="text-neutral-500" size={18} />
                    {!collapsed && <span>Profile</span>}
                </Button>
            </div>
        </aside>
    );
};

export default Sidebar;