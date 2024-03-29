import { ReactNode } from "react";

export interface ButtonProps {
    text: string;
    backgroundColor: string;
    className: string;
}

export interface SideOutMenuProps {
    handleOpenMenu: () => void;
}

export interface NavPanelProps {
    className: string;
}

export interface SearchFormProps {
    icon: ReactNode;
    className: string;
}