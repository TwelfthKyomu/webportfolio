"use client";

import type { ReactNode } from 'react';
import React, { createContext, useContext, useMemo, useState } from 'react';

import { MenuItems } from "@/constants/menu";
import type { ProjectContextType, ProjectT } from 'types/project';

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
    children: ReactNode;
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
    const [currentFilter, setCurrentFilter] = useState<MenuItems>(MenuItems.All);
    const [error, setError] = useState<string | null>(null);

    const [projects] = useState<ProjectT>({
        repositories: [
            {
                id: 1,
                name: "Portfolio Website",
                description: "Современное портфолио с анимациями, темной темой и адаптивным дизайном. Включает систему управления проектами и интеграцию с GitHub API.",
                imagePath: "/default-image.jpg",
                source: "github",
                language: "TypeScript",
                technologies: ["React", "Next.js", "TypeScript", "SCSS", "SQLite"],
                htmlUrl: "https://portfolio-demo.com",
                createdAt: new Date('2024-01-15'),
                updatedAt: new Date('2024-03-20')
            },
            {
                id: 2,
                name: "Portfolio Website",
                description: "Современное портфолио с анимациями, темной темой и адаптивным дизайном. Включает систему управления проектами и интеграцию с GitHub API.",
                imagePath: "/default-image.jpg",
                source: "github",
                language: "TypeScript",
                technologies: ["React", "Next.js", "TypeScript", "SCSS", "SQLite"],
                htmlUrl: "https://portfolio-demo.com",
                createdAt: new Date('2024-01-15'),
                updatedAt: new Date('2024-03-20')
            }
        ],
        commercialProjects: [
            {
                id: 3,
                name: "Portfolio Website",
                description: "Современное портфолио с анимациями, темной темой и адаптивным дизайном. Включает систему управления проектами и интеграцию с GitHub API.",
                imagePath: "/default-image.jpg",
                technologies: ["React", "Next.js", "TypeScript", "SCSS", "SQLite"],
                htmlUrl: "https://portfolio-demo.com",
                createdAt: new Date('2024-01-15'),
                updatedAt: new Date('2024-03-20')
            }
        ],
        updates: []
    });

    const filteredProjects = useMemo(() => {
        switch (currentFilter) {
            case MenuItems.Personal:
                return projects.repositories;
            case MenuItems.Commercial:
                return projects.commercialProjects;
            case MenuItems.Updates:
                return projects.updates;
            default:
                return [...projects.repositories, ...projects.commercialProjects];
        }
    }, [currentFilter, projects]);

    const contextValue = useMemo(() => ({
        projects,
        isLoading: false,
        error,
        currentFilter,
        handleFilterChange: setCurrentFilter,
        filteredProjects
    }), [projects, error, currentFilter, filteredProjects]);

    return (
        <ProjectContext.Provider value={ contextValue }>
            { children }
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);

    if (!context) {
        throw new Error('useProjectContext must be used within a ProjectProvider');
    }

    return context;
};