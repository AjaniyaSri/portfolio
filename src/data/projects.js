import co2Image from '../assets/projects/co2-emission.png'
import passwordImage from '../assets/projects/password-safety-ai.png'
import hotelImage from '../assets/projects/hotel-management-system.png'
import foodDeliveryImage from '../assets/projects/food-delivery-app.png'
import carResaleImage from '../assets/projects/car-resale-price.png'
import storeSalesImage from '../assets/projects/superstoreSalesImage.png'
import taxIRDAssistantImage from '../assets/projects/tax_ird_assistant.png'

export const projects = [
  {
  title: 'Intelligent Sri Lanka IRD Tax Intelligence & Compliance Assistant',
  year: '2026',
  image: taxIRDAssistantImage,
  points: [
    'Built a Retrieval-Augmented Generation (RAG) assistant to answer Sri Lanka IRD tax questions strictly from uploaded official PDF documents.',
    'Implemented PDF ingestion with page-wise text extraction, chunking, embeddings, and semantic search using ChromaDB + Sentence Transformers for accurate retrieval.',
    'Developed a FastAPI + Streamlit web app that returns citation-backed answers (document, page, section, snippet) with a strict fallback to prevent hallucinations.',
    ],
    link: 'https://github.com/AjaniyaSri/tax-rag-ird-assistant',
    demo: 'https://drive.google.com/file/d/1LxtsQ6hSB20gMwIYI_QxpkHAEo3WU40x/view?usp=sharing',

  },
  {
  title: 'AI Interview Assistant (RAG-based)',
  year: '2025',
  image: interviewAssistantImage,
  points: [
    'Built a Retrieval-Augmented Generation (RAG) system that generates interview questions grounded in resume and job description context.',
    'Used sentence-transformer embeddings to retrieve relevant resume and JD sections before LLM-based question generation and evaluation.',
    'Implemented structured answer scoring across relevance, clarity, technical accuracy, structure, and impact.',
    'Developed a Streamlit frontend for interactive interviews and performance dashboards.',
    'Designed a FastAPI backend to manage document ingestion, vector-based retrieval, evaluation APIs, and analytics.',
  ],
  link: 'https://github.com/AjaniyaSri/AI-Interview-Assistant'

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
    demo: 'https://drive.google.com/file/d/1vPTcM8EMg_rGwhy6d8YOLoiqT8Y6-W0u/view?usp=sharing',

  },
  {
    title: 'CO2 Emission Prediction By Vehicles',
    year: '2025',
    image: co2Image,
    points: [
      'Built regression models with feature engineering and dataset preprocessing to estimate vehicle CO₂ emissions.',
      'Evaluated model performance and deployed the best model using pickle integration.',
      'Designed a user-friendly interface enabling real-time predictions for different vehicle inputs.',
    ],
    link: 'https://github.com/AjaniyaSri/co2_emission_predictor',
    demo: 'https://co2-vehicle-calculator.streamlit.app',
  },
  {
    title: 'Superstore sales Prediction System',
    year: '2026',
    image: storeSalesImage,
    points: [
      'Analyzed historical superstore sales data to uncover sales patterns, seasonal trends, and regional performance.',
      'Built machine learning regression models to predict future sales based on factors like category, discount, and region.',
      'Created insightful visualizations to explain the impact of discounts, product categories, and time on overall sales performance.',
    ],
    link: 'https://github.com/AjaniyaSri/Store-sales-prediction',
    demo: 'https://superstore-sales-prediction.streamlit.app',
  },
]
