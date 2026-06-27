// components/main/Projects.tsx

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pt-5 cursor-pointer">
      
      {/* Inforza Tech */}
      <ProjectCard
        src="/inforza-tech1.png"
        title="Inforza Tech – Premium IT Services Website"
        description="Redesigned and modernized a full production website for Inforza Tech, an Ontario-based IT services company serving the Greater Toronto Area. Built a premium dark/light responsive experience with a modern glassmorphism design system, animated hero sections, service pages, location pages, booking flows, contact forms, cookie consent management, and SEO-focused metadata. Added a scalable service catalog with dynamic routes, GTA service-area coverage map, location cards with live availability indicators, Resend-powered transactional emails, LocalBusiness schema, sitemap support, and polished mobile-first UX across the full site."
        techStack="Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI, Resend, next-themes, Zod, React Hook Form, LocalBusiness Schema, Vercel"
        link="https://www.inforzatech.com"
      />

        {/* Man With The Van – most recent, pinned first */}
        <ProjectCard
          src="/man-with-van.png"
          title="Man With The Van – GTA Moving Company Website"
          description="Built a complete, production-ready moving company website for the Greater Toronto Area from scratch.
          Features a fully animated hero section with a GSAP-powered floating van illustration, scroll-triggered Framer Motion reveals across 9 home page sections,
          an interactive quote/pricing page with 3 service tiers, a postal code coverage checker, testimonials carousel with rating breakdowns,
          and a working contact form with success state.
          Designed with a dark navy + burnt orange glassmorphism theme, Tailwind CSS v4 utility classes, and a fully responsive mobile-first layout.
          Deployed on Vercel with Node 22 and Turbopack for sub-400ms dev startup."
          techStack="Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lucide React, Vercel, Turbopack"
          link="https://man-with-van.vercel.app"
        />

        {/* Seneca Coffee Shop */}
        <ProjectCard
          src="/seneca-coffee.png"
          title="Seneca Coffee Shop – Campus Ordering Platform"
          description="Developed a production-ready full-stack coffee ordering platform designed for Seneca students and staff.
          The platform enables users to browse menu items, place pickup orders, track live order status updates, and manage carts seamlessly.
          Implemented a role-based staff dashboard for managing incoming orders with forward-only status transitions.
          Features include Clerk authentication, PostgreSQL database integration on Render, responsive UI/UX, animated landing pages, and CI/CD deployment workflows using GitHub Actions."
          techStack="Next.js 15, React 19, TypeScript, Tailwind CSS, Django REST Framework, PostgreSQL, Render, Clerk Authentication, Sanity CMS, Shadcn UI, GitHub Actions, Vercel"
          link="https://seneca-coffee-shop.vercel.app"
        />

        {/* VidSparkAI */}
        <ProjectCard
          src="/vidspark-ai.png"
          title="VidSparkAI - AI-Powered Video Analysis Platform"
          description="An advanced SaaS platform that uses AI to analyze YouTube videos and generate insights, transcriptions, titles, and thumbnails.
          Features include Claude 3.7 powered AI chat agent, usage tracking and subscription management, YouTube video metadata processing,
          automatic transcription with caching, thumbnail generation, and title creation using AI.
          Implemented with a responsive design, feature flag system, and comprehensive usage analytics."
          techStack="Next.js 15, React 19, TypeScript, Tailwind CSS, Convex DB, Clerk Auth, Schematic Feature Flags, Anthropic Claude 3.7, AI SDK, YouTubeI.js, Framer Motion, ShadcnUI"
          link="https://vidsparkai.vercel.app"
        />

        {/* Doctor Dave Tech Solutions */}
        <ProjectCard
          src="/doctor-dave-tech.png"
          title="Doctor Dave Tech Solutions"
          description="Developed a comprehensive IT services platform for computer repair business. Features include an intuitive scheduling system,
          contact management with email notifications, newsletter subscription with automated responses, coupon generation system, and a dynamic blog system with Sanity CMS.
          The platform showcases responsive design with dark/light mode support, and integrates location-based services for local customers."
          techStack="Next.js 15, TypeScript, Tailwind CSS, Sanity.io, Resend (Email API), ShadcnUI, Framer Motion, Leaflet Maps, React Server Components, Server Actions"
          link="https://doctor-dave.vercel.app"
        />

        {/* VeroSkin */}
        <ProjectCard
          src="/veroskin.png"
          title="VeroSkin – AI-Powered Beauty E-Commerce Platform"
          description="A modern full-stack beauty e-commerce platform focused on personalized shopping experiences and scalable storefront architecture.
          Features include dynamic product browsing, advanced category filtering, intelligent search, secure authentication, persistent cart management,
          Stripe-powered checkout flows, webhook-based order processing, and real-time CMS content management with Sanity Studio.
          Developed a custom foundation configurator allowing users to explore personalized beauty product variations with responsive UI interactions and optimized performance."
          techStack="Next.js 16, React 19, TypeScript, Tailwind CSS, Sanity.io, Clerk Auth, Stripe, Zustand, Shadcn UI, Server Actions, Vercel"
          link="https://veroskin-ecommerce.vercel.app" 
        />

        {/* Instagram-Style E-commerce */}
        <ProjectCard
          src="/insta-shop.png"
          title="Instagram-Style E-commerce Platform"
          description="A modern e-commerce platform with Instagram-like features, combining social media aesthetics with robust shopping functionality.
          Features include real-time content preview with Sanity Studio, seamless payment processing with Stripe, and secure user authentication via Clerk.
          The platform offers a dynamic shopping cart system, live product updates, and an intuitive search function."
          techStack="Next.js 14, TypeScript, Tailwind CSS, Sanity.io, Stripe, Clerk Auth, Zustand, ShadcnUI, Server Actions"
          link="https://instantshop-eight.vercel.app"
        />

        {/* Luxury Royal Painter */}
        <ProjectCard
          src="/luxury_royal_painter.png"
          title="Luxury Royal Painter - Premium Painting Services"
          description="A sophisticated web platform for a high-end painting company featuring a responsive design with dark/light mode support.
          The site includes an interactive service selection system, multi-step booking process, dynamic FAQ section with search capabilities,
          service area mapping with Leaflet, and animated content sections using Framer Motion.
          The platform delivers a premium user experience with smooth transitions, accessibility features, and mobile-first design principles."
          techStack="Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Fuse.js, Leaflet Maps, Next-themes, Zod, Resend API"
          link="https://sky-penter.vercel.app"
        />

        {/* Insta_Shop MERN */}
        <ProjectCard
          src="/insta_shop_mern.png"
          title="Insta_Shop - Full Stack E-commerce Platform"
          description="A feature-rich e-commerce platform built with the MERN stack, combining modern design with robust functionality.
          Features include user authentication, product management with categories and brands, shopping cart functionality, PayPal payment integration, and a dynamic image carousel system.
          The platform offers comprehensive order management, address handling, and an admin dashboard for content management.
          Implements responsive design principles and real-time updates using Redux for state management."
          techStack="MongoDB, Express.js, React, Node.js, Redux Toolkit, Tailwind CSS, Shadcn UI, PayPal API, Cloudinary, JWT Authentication"
          link="https://e-commerce-instashop-3.onrender.com"
        />

        {/* HomeServices Hub – Seeker */}
        <ProjectCard
          src="/homeservice.png"
          title="HomeServices Hub - Service Seeker Platform"
          description="This platform empowers users to effortlessly find and book a wide range of home services.
          With robust search filters and a user-friendly interface, service seekers can browse through service providers,
          view detailed profiles, and make bookings seamlessly."
          techStack="Next.js, React, Tailwind CSS, MongoDB, Firebase, Google Places"
          link="https://homeservices-hub.vercel.app/"
        />

        {/* HomeServices Hub – Provider */}
        <ProjectCard
          src="/home_sp.png"
          title="HomeServices Hub - Service Provider Platform"
          description="The Service Provider Platform enables service professionals to manage their offerings, communicate with clients,
          and track bookings. Providers can easily create and update their profiles, list services, and monitor transactions in real-time."
          techStack="Next.js, React, Tailwind CSS, MongoDB, Firebase, Google Places"
          link="https://homeservices-hub-sp.vercel.app"
        />

        {/* Walmart Clone */}
        <ProjectCard
          src="/walmart_images/walmart_cart.png"
          title="Walmart Cloned Website"
          description="A high-performance, fully responsive clone of the Walmart website. This project focuses on modern web development practices
          and features asynchronous data loading, an image carousel, and dynamic cart management. Leveraging real-time data scraped from Walmart's API
          using Oxylabs, it provides seamless e-commerce functionality, including advanced routing with parallel and intercept routes.
          Currently products are not fetched due to the Oxylabs API requiring payment."
          techStack="Next.js, React, Tailwind CSS, Zustand, Oxylabs API, ChadCN UI, Parallel and Intercept Routes, Vercel"
          link="https://walmart-clone-sandy.vercel.app"
        />

        {/* Chat with PDF */}
        <ProjectCard
          src="/chat_with_pdf.png"
          title="Chat with PDF Challenge in 5 days"
          description="Developed a web application allowing users to interact with PDF documents using AI-driven chat functionalities.
          Integrated Stripe for subscription management and Firebase for data storage, featuring user authentication,
          subscription management, and responsive design."
          techStack="Next.js, Firebase, Stripe, Clerk, Tailwind CSS, DaisyUI, OpenAI GPT-3.5, Langchain, Pinecone"
          link="https://chat-with-pdf-challenge-rose.vercel.app"
        />

        {/* Robotics Part 1 */}
        <ProjectCard
          src="/robotic_1.png"
          title="Basic Autonomous Navigation Challenge – Part 1"
          description="Launched a sample application to create a map for an autonomous robot using ROS.
          Created and saved a map of the world in the ROS platform for autonomous navigation."
          techStack="ROS, TurtleBot3, Gazebo, RViz"
          link="https://www.youtube.com/watch?v=8g4wmFvoogA"
        />

        {/* Robotics Part 2 */}
        <ProjectCard
          src="/robotic_2.png"
          title="Basic Autonomous Navigation Challenge – Part 2"
          description="Developed autonomous navigation capabilities using the pre-created map.
          Configured the robot to autonomously navigate within its designated environment."
          techStack="ROS, TurtleBot3, Gazebo, RViz"
          link="https://www.youtube.com/watch?v=c9jFwpLQ088"
        />

        {/* Rent With Us */}
        <ProjectCard
          src="/rentUs.png"
          title="Rent With Us - Simplifying Toronto's Housing Search"
          description="Developed for the Seneca Hackathon 2024, 'Rent With Us' is a pioneering solution to Toronto's pressing housing needs.
          This platform empowers room seekers and house renters to find their ideal accommodations with ease,
          leveraging advanced AI for intelligent search functionalities."
          techStack="Figma, Relume, AI-powered search"
          link="https://www.figma.com/file/EHxnnjuuUADVWTtI9QHgMp/Relume-(Community)?type=design&node-id=97%3A2334&mode=design&t=oS7HpNsb2bmt3fAl-1"
        />

        {/* The Met */}
        <ProjectCard
          src="/card_met.png"
          title="Artistic Exploration: Themed Website Inspired by The Met"
          description="Inspired by the eclectic art collections of the Metropolitan Museum of Art, this website combines the historical
          grandeur of classical art with modern digital aesthetics. Each design element reflects a fusion of ancient artistry and contemporary
          technology, creating a user experience that is both educational and visually captivating."
          techStack="Next.js, React, Bootstrap, SWR, Jotai"
          link="https://github.com/ims13"
        />

      </div>
    </div>
  )
}

export default Projects
