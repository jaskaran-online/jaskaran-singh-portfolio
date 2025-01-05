'use client';

import { useState, useEffect } from 'react';

interface UseActiveSectionOptions {
    sections: string[];
    threshold?: number;
    rootMargin?: string;
    defaultSection?: string;
}

export function useActiveSection({
    sections,
    threshold = 0.3,
    rootMargin = '-80px 0px -50% 0px',
    defaultSection = 'home'
}: UseActiveSectionOptions) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Get all sections that are currently intersecting
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .map(entry => entry.target.id);

                // If multiple sections are visible, choose the first one
                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0]);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        // Observe all sections
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        // Set initial active section based on URL hash or default
        const hash = window.location.hash.replace('#', '');
        setActiveSection(hash || defaultSection);

        // Cleanup observer
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections, threshold, rootMargin, defaultSection]);

    return activeSection;
}
