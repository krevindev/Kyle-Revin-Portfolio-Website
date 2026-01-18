import { useEffect, useState } from 'react';
import './FeaturedWorks.css';
import { motion } from 'framer-motion';

export default function FeaturedWorks() {


    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

    const featuredWorksData = [
        'Anony - Anonymous Messaging Web App',
        'Notey-Fi - Google Classroom to Facebook Notification Chatbot',
        'Redactor: OCR-based Media Censorship',
        'FB-GPT - ChatGPT to Facebook Chatbot'
    ]

    const featuredWorks = featuredWorksData.map((work, index) => {
        return (
            <h5
                className={index == currentFeaturedIndex ? 'in' : 'out'} key={index}>
                {work}
            </h5>
        )
    })

    // Switching the current featured text
    useEffect(() => {
        const changeFeaturedInterval = setInterval(() => {
            setCurrentFeaturedIndex(prev => {
                return currentFeaturedIndex + 1 >= featuredWorks.length ? 0 : prev += 1
            });
        }, 2000);

        return () => clearInterval(changeFeaturedInterval);
    });


    return (
        <div id="featured-works">
            <div id='featured-works-content'>
                <h1>Featured Works</h1>
                <div id='featured-current-container'>
                    {
                        featuredWorks
                    }
                </div>
                <div id='featured-button-container'>
                    <button onClick={() => {
                        document.getElementById('portfolio-section').scrollIntoView({ block: 'start' })
                    }}>View Portfolio</button>
                </div>
            </div>
        </div>
    )
}