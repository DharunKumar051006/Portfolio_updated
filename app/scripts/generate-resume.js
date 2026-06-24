import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // Letter size
  const { height } = page.getSize();
  
  let yPosition = height - 40;
  
  // Helper function to add text
  const addText = (text, size = 12, bold = false, color = rgb(0, 0, 0), indent = 40) => {
    page.drawText(text, {
      x: indent,
      y: yPosition,
      size: size,
      color: color,
    });
    yPosition -= size + 8;
  };
  
  // Helper function for section titles
  const addSection = (title) => {
    yPosition -= 8;
    page.drawText(title, {
      x: 40,
      y: yPosition,
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawLine({
      start: { x: 40, y: yPosition - 4 },
      end: { x: 570, y: yPosition - 4 },
      thickness: 0.5,
      color: rgb(0, 0, 0),
    });
    yPosition -= 20;
  };
  
  // Header
  addText('Dharun Kumar S', 20);
  addText('AI/ML & Full Stack Developer', 11);
  
  addText('Email: dharunkumar123a@gmail.com | Phone: +91 99426 13840 | Location: Trichy, Tamil Nadu', 10);
  addText('GitHub: github.com/Dharunkumar | LinkedIn: linkedin.com/in/Dharun-kumar-S', 10);
  
  // Professional Summary
  addSection('PROFESSIONAL SUMMARY');
  addText('Passionate AI/ML and Full Stack Developer with expertise in building intelligent solutions', 10);
  addText('using cutting-edge technologies. Skilled in Python, JavaScript, React, Node.js, and modern', 10);
  addText('ML frameworks. Strong background in backend development and AI model implementation.', 10);
  
  // Skills
  addSection('TECHNICAL SKILLS');
  addText('Languages: Python, Java, JavaScript, HTML, CSS', 10);
  addText('ML/AI: TensorFlow, PyTorch, Keras, NumPy, Pandas, Scikit-learn, OpenCV, NLP, LLMs, RAG', 10);
  addText('Frontend: React.js, Tailwind CSS', 10);
  addText('Backend: Node.js, Express', 10);
  addText('Databases: MongoDB, MySQL', 10);
  addText('Tools & Platforms: Git, Docker, Flutter', 10);
  addText('Other: RESTful APIs, Data Processing, Machine Learning, Deep Learning', 10);
  
  // Experience
  addSection('PROFESSIONAL EXPERIENCE');
  addText('Backend Developer | Cleverstudio', 10);
  addText('April 2026 - May 2026', 10);
  addText('• Developed and maintained backend services using Node.js and Express', 10);
  addText('• Implemented database optimization techniques improving query performance by 30%', 10);
  addText('• Collaborated with frontend team to deliver seamless user experiences', 10);
  
  // Projects
  addSection('PROJECTS');
  addText('Smart AI Notes Summarizer', 10);
  addText('• Built an intelligent note summarization system using NLP and LLMs', 10);
  addText('• Implemented RAG (Retrieval-Augmented Generation) for enhanced accuracy', 10);
  addText('• Technologies: Python, TensorFlow, React.js, Node.js', 10);
  
  yPosition -= 6;
  addText('Gamified Learning Platform', 10);
  addText('• Developed full-stack learning platform with gamification features', 10);
  addText('• Implemented backend API and interactive frontend using React', 10);
  addText('• Technologies: React.js, Node.js, MongoDB, Flutter (mobile)', 10);
  
  yPosition -= 6;
  addText('RAG Based AI Tutor', 10);
  addText('• Created AI tutor using Retrieval-Augmented Generation', 10);
  addText('• Implemented context-aware responses using vector databases', 10);
  addText('• Technologies: Python, LLMs, RAG, MongoDB', 10);
  
  yPosition -= 6;
  addText('Agrounity (Thinkathon\'26 Runner-up)', 10);
  addText('• Developed agricultural technology solution for rural farmers', 10);
  addText('• Integrated ML models for crop recommendation and disease detection', 10);
  addText('• Technologies: Python, Machine Learning, React.js, Node.js', 10);
  
  // Education
  addSection('EDUCATION');
  addText('B.Tech in Artificial Intelligence & Data Science', 10);
  addText('Kongu Engineering College, Erode, Tamil Nadu', 10);
  addText('August 2024 - May 2028 | CGPA: 8.00', 10);
  
  // Certifications & Achievements
  addSection('CERTIFICATIONS & ACHIEVEMENTS');
  addText('• IBM Generative AI Certification', 10);
  addText('• NASSCOM Data Processing Certification', 10);
  addText('• Infosys JavaScript Certification', 10);
  addText('• Smart India Hackathon 2025 Finalist', 10);
  addText('• Thinkathon\'26 Runner-up (Agrounity)', 10);
  
  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'resume.pdf');
  
  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume generated successfully at: ${outputPath}`);
}

generateResume().catch(console.error);
