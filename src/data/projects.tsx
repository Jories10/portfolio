type Project = {
    id:number,
    title:string,
    description:string,
    technologies:string[],
    liveUrl: string,
    githubUrl:string
}

export const projects: Project[] =[
    {
        id:1,
        title:"Burger Landing Page",
        description:"A responsive burger ordering web application featuring a modern landing page, interactive menu, product cards, ordering flow, customer reviews, and a mobile-friendly user experience.",
        technologies:["HTML5","CSS3","JavaScript","Git","Visual Studio Code"],
        liveUrl:"https://jories10.github.io/burger-landing-page/",
        githubUrl:"https://github.com/Jories10"
    },
    {
        id:1,
        title:"Coffee Landing Page",
        description:"A responsive coffee shop web application featuring a categorized menu, interactive product cards, testimonial submission, contact functionality, and a warm, user-focused interface.",
        technologies:["HTML5","CSS3","SASS","JavaScript","Git","Visual Studio Code"],
        liveUrl:"https://jories10.github.io/coffee-landing-page/",
        githubUrl:"https://github.com/Jories10"
    }
]

