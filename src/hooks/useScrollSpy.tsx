import { useState, useEffect } from "react";

export default function useScrollSpy(sectionIds:string[]){
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "home");

    const entriesCallback = (entries: IntersectionObserverEntry[])=>{
        const visibleSection = entries.filter((entry)=> entry.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);

        if(visibleSection.length > 0){
            setActiveSection(visibleSection[0].target.id);
        }
    }

    useEffect(()=>{
        const sections = sectionIds.map(id=>document.getElementById(id)).filter((section):section is HTMLElement=>section !== null);

        if(sections.length === 0) return;

        const observer = new IntersectionObserver(entriesCallback, {root:null, threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-20% 0px -60% 0px"});
        
        sections.forEach((section)=> observer.observe(section));

        return ()=> observer.disconnect();
    },[sectionIds]);

    return activeSection;
}