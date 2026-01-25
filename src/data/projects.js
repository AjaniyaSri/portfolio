import co2Image from '../assets/projects/co2-emission.png'
import passwordImage from '../assets/projects/password-safety-ai.png'
import hotelImage from '../assets/projects/hotel-management-system.png'
import foodDeliveryImage from '../assets/projects/food-delivery-app.png'
import carResaleImage from '../assets/projects/car-resale-price.png'

export const projects = [
  {
    title: 'CO2 Emission Prediction By Vehicles',
    year: '2025',
    role: 'Machine Learning Developer',
    image: co2Image,
    points: [
      'Built regression models with feature engineering and dataset preprocessing to estimate vehicle CO₂ emissions.',
      'Evaluated model performance and deployed the best model using pickle integration.',
      'Designed a user-friendly interface enabling real-time predictions for different vehicle inputs.',
    ],
    link: 'https://github.com/sajivanK/vehicle-co2-emission-predictor',
  },
  {
    title: 'Password Safety AI',
    year: '2025',
    image: passwordImage,
    points: [
      'Developed an ML and NLP-based system to classify passwords as weak, strong, or potentially compromised.',
      'Implemented real-time strength evaluation and breach checks with user-friendly feedback.',
      'Built the backend in Python with Flask to expose a simple, secure API.',
    ],
    link: 'https://github.com/sajivanK/password-safety-ai',
  },
  {
    title: 'Hotel Management System (MERN Stack)',
    year: '2024',
    image: hotelImage,
    points: [
      'Implemented customer-side hotel booking with room browsing and reservations.',
      'Built admin-side features for booking management, event management, and additional services.',
      'Used React, Node.js, Express, and MongoDB to create a full-stack MERN application.',
    ],
  },
  {
    title: 'Food Delivery Application',
    year: '2025',
    role: 'Full Stack Developer',
    image: foodDeliveryImage,
    points: [
      'Developed a full-stack food delivery application with user authentication and restaurant browsing.',
      'Implemented cart management, order placement, and real-time order status tracking.',
      'Built responsive UI using React and handled backend APIs with Node.js and MongoDB.',
    ],
  },
  {
    title: 'Car Resale Price Prediction System',
    year: '2025',
    role: 'Machine Learning Developer',
    image: carResaleImage,
    points: [
      'Analyzed historical car sales data to identify pricing trends and key influencing factors.',
      'Built regression-based machine learning models to predict car resale prices accurately.',
      'Created visual summaries to explain the impact of mileage, fuel type, and ownership on resale value.',
    ],
  },
]
