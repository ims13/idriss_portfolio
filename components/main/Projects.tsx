// components/main/Project.js

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20"
         id="projects"
    >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        {/** grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pt-5 cursor-pointer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pt-5 cursor-pointer">
        
        {/* New E-commerce Project Card */}
        <ProjectCard 
          src="/insta-shop.png"  // Add your project screenshot
          title="Instagram-Style E-commerce Platform"
          description="A modern e-commerce platform with Instagram-like features, combining social 
          media aesthetics with robust shopping functionality. Features include real-time content 
          preview with Sanity Studio, seamless payment processing with Stripe, and secure user 
          authentication via Clerk. The platform offers a dynamic shopping cart system, live 
          product updates, and an intuitive search function."
          techStack="Next.js 14, TypeScript, Tailwind CSS, Sanity.io, Stripe, Clerk Auth, 
          Zustand, ShadcnUI, Server Actions"
          link="https://instantshop-eight.vercel.app" // Link to the deployed project or detail page
        />
        {/* New E-commerce Project Card */}
        {/* <ProjectCard 
          src="/insta_shop_mern.png"  // Update with your MERN project screenshot
          title="Insta_Shop - Full Stack E-commerce Platform"
          description="A feature-rich e-commerce platform built with the MERN stack, combining modern design with robust functionality. 
          Features include user authentication, product management with categories and brands, shopping cart functionality, PayPal payment integration, and a dynamic image carousel system. 
          The platform offers comprehensive order management, address handling, and an admin dashboard for 
          content management. 
          Implements responsive design principles and real-time updates using Redux for state management."
          techStack="MongoDB, Express.js, React, Node.js, Redux Toolkit, Tailwind CSS, Shadcn UI, PayPal API, Cloudinary, 
          JWT Authentication"
          // link="https://e-commerce-instashop-3.onrender.com"  // Update with your actual repository link
      /> */}
        
        <ProjectCard 
          src="/homeservice.png"
          title="HomeServices Hub - Service Seeker Platform"
          description="This platform empowers users to effortlessly find and book a wide range of home services. 
          With robust search filters and a user-friendly interface, service seekers can browse through service providers, 
          view detailed profiles, and make bookings seamlessly."
          techStack="Next.js, React, Tailwind CSS, MongoDB, Firebase, Google Places"
          link="https://homeservices-hub.vercel.app/"  // Link to the deployed project or detail page
        />

        <ProjectCard 
          src="/home_sp.png"
          title="HomeServices Hub - Service Provider Platform"
          description="The Service Provider Platform enables service professionals to manage their offerings, communicate with clients, 
          and track bookings. Providers can easily create and update their profiles, list services, and monitor transactions in real-time."
          techStack="Next.js, React, Tailwind CSS, MongoDB, Firebase, Google Places"
          link="https://homeservices-hub-sp.vercel.app"  // Link to the deployed project or detail page
        />
        
        <ProjectCard 
          src="/walmart_images/walmart_cart.png"
          title="Walmart Cloned Website"
          description="A high-performance, fully responsive clone of the Walmart website. This project focuses on modern web development practices 
          and features asynchronous data loading, an image carousel, and dynamic cart management. Leveraging real-time data scrapped from Walmart's API 
          using Oxylabs, it provides seamless e-commerce functionality, including advanced routing with parallel and intercept routes. 
          Currently products are not fetched due to the use of Oxlabs Api payment"
          techStack="Next.js, React, Tailwind CSS, Zustand, Oxylabs API, ChadCN UI, Parallel and Intercept Routes, Vercel"
          link="https://walmart-clone-sandy.vercel.app"  // Link to the deployed project or detail page
        />

        <ProjectCard 
          src="/chat_with_pdf.png"
          title="Chat with PDF Challenge in 5 days"
          description="Developed a web application allowing users to interact with PDF documents using AI-driven chat functionalities. 
          Integrated Stripe for subscription management and Firebase for data storage, featuring user authentication, 
          subscription management, and responsive design."
          techStack="Next.js, Firebase, Stripe, Clerk, Tailwind CSS, DaisyUI, OpenAI GPT-3.5, Langchain, Pinecone"
          link="https://chat-with-pdf-challenge-rose.vercel.app"  // Link to the deployed project or detail page
        />

        <ProjectCard 
          src="/robotic_1.png"
          title="Basic Autonomous Navigation Challenge – Part 1"
          description="Launched a sample application to create a map for an autonomous robot using ROS. 
          Created and saved a map of the world in the ROS platform for autonomous navigation."
          techStack="ROS, TurtleBot3, Gazebo, RViz"
          link="https://www.youtube.com/watch?v=8g4wmFvoogA"  // Link to the video demonstration or detail page
        />

        <ProjectCard 
          src="/robotic_2.png"
          title="Basic Autonomous Navigation Challenge – Part 2"
          description="Developed autonomous navigation capabilities using the pre-created map. 
          Configured the robot to autonomously navigate within its designated environment."
          techStack="ROS, TurtleBot3, Gazebo, RViz"
          link="https://www.youtube.com/watch?v=c9jFwpLQ088"  // Link to the video demonstration or detail page
        />

        <ProjectCard 
          src="/rentUs.png"
          title="Rent With Us - Simplifying Toronto's Housing Search"
          description="Developed for the Seneca Hackathon 2024, 'Rent With Us' is a pioneering solution to Toronto's pressing housing needs. 
          This platform empowers room seekers and house renters to find their ideal accommodations with ease, 
          leveraging advanced AI for intelligent search functionalities."
          techStack="Figma, Relume, AI-powered search"
          link="https://www.figma.com/file/EHxnnjuuUADVWTtI9QHgMp/Relume-(Community)?type=design&node-id=97%3A2334&mode=design&t=oS7HpNsb2bmt3fAl-1"  // Link to the deployed project or detail page
        />

        <ProjectCard
          src="/card_met.png"
          title="Artistic Exploration: Themed Website Inspired by The Met"
          description="Inspired by the eclectic art collections of the Metropolitan Museum of Art, this website combines the historical 
          grandeur of classical art with modern digital aesthetics. Each design element reflects a fusion of ancient artistry and contemporary 
          technology, creating a user experience that is both educational and visually captivating."
          techStack="Next.js, React, Bootstrap, SWR, Jotai"
          link=" "  // Link to the deployed project or detail page
        />

        </div>

    </div>
  )
}

export default Projects