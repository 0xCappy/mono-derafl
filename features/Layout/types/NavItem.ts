import React from "react";

export interface NavItem {
    icon: React.ReactNode
    title: string
    value: string
    navItems?: NavItem[]
}
