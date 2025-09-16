"use client"
import React,{useState,useEffect} from "react"
import Image from "next/image"
import project1 from "@/assets/proj5.png"
import project2 from "@/assets/proj6.png"
import project3 from "@/assets/proj7.png"

const projects =[
    {id:1 , year:2024, 
        title:"Atomic wordpress ",
        description :"Lorem ipsum nlah ffjkdfn dfvdfvfd fdvfdvd",
        image:project1 },
    {id:2 , year:2024, 
        title:"Atomic wordpress ",
        description :"Lorem ipsum nlah ffjkdfn dfvdfvfd fdvfdvd",
        image:project2 },
    {id:3 , year:2024, 
        title:"Atomic wordpress ",
        description :"Lorem ipsum nlah ffjkdfn dfvdfvfd fdvfdvd",
        image:project3 },
]   

const Portfolio =()=>{
    const [selectedProject, setSelectedProject]=useState(projects[0])

    return(
       <section id="portfolio" className="py-32 text-white">
        <h2 className="text-6xl font-bold mb-10">Selected <span className="text-gray-400">Projects</span></h2>
            {projects.map((project)=>(
                <div 
                    key={project.id}
                    onClick={()=> setSelectedProject(project)}
                    className="cursor-pointer mb-8 group">
                        
                        <p></p>

                </div>
            ))}
       </section>
    )
}

export default Portfolio