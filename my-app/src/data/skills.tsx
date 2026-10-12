type Skill = {
    skills:{
        header:string,
        name:string[],
        category:string
    },
    reactDevelopment:{
        header:string,
        react:string[]
    },
    developmentPractices:{
        header:string,
        practices:string[]
    }

}

export const skillsDetails: Skill[] = [
   {
    skills:{
        header:"Frontend",
        name:["HTML5","CSS3","JavaScipt","React","TypeScript","Tailwind","Bootstrap"],
        category:"Frontend"
    },
    reactDevelopment:{
        header:"React & Development",
        react:["React Hooks","Functional Components","Props & State","Component Composition","Conditional Rendering","React Form Handling","API Integration","Routes"]
    },
    developmentPractices:{
        header:"Development Practices",
        practices:["Responsive Web Design","Component-Based Architecture","Frontend Architecture","Reusable Components","Separation of Concerns","Clean Code","Followed Web Accessibility Standards","Git & GitHub"]
    }
   }
]