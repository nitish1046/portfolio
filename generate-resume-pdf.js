// generate-resume-pdf.js
// Creates a clean valid PDF 1.4 for Nitish's Resume placeholder in public/resume.pdf
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = path.join(__dirname, 'public', 'resume.pdf');

// Minimal valid single-page PDF with Nitish's resume text
const contentLines = [
  "NITISH",
  "NITISH//X - Computer Science Student & Aspiring Software Engineer",
  "Email: nitishkumar741188@gmail.com | LinkedIn: linkedin.com/in/nitish1046 | GitHub: github.com/nitish1046",
  "---------------------------------------------------------------------------------------------------------",
  "EDUCATION",
  "B.Tech - Computer Science and Engineering",
  "Arya College of Engineering, Jaipur | Expected Graduation: 2029",
  "",
  "TECHNICAL ARSENAL",
  "* Languages: C, C++, Python",
  "* Core CS: Data Structures & Algorithms, Object-Oriented Programming (OOP)",
  "* Web Development: HTML, CSS, JavaScript (Exploring)",
  "* Developer Tools: Git, GitHub, VS Code, Linux/Windows",
  "",
  "FEATURED PROJECTS",
  "1. SurplusToShelter - Food-Rescue Platform",
  "   Technologies: HTML, CSS, JavaScript, Python, Flask, SQLite",
  "   Role: Frontend Development + Database Architecture",
  "   Impact: Food donation matching, pickup/delivery coordination, real-time status dashboard.",
  "",
  "2. Smart EV Charging Management System",
  "   Technologies: C++, Object-Oriented Programming, File Handling, STL / Vectors",
  "   Role: OOP Concepts + C++ Core Development",
  "   Impact: Station & slot booking, vehicle tracking, automated billing, and station analytics.",
  "",
  "3. Waste Segregation Monitoring System",
  "   Technologies: Technology-Oriented Urban Monitoring",
  "   Role: Hardware-Software Integration & Logic",
  "   Impact: Real-time municipal monitoring & automated sorting guidance.",
  "",
  "ACHIEVEMENTS & ACTIVITIES",
  "* Hackathon Participant - Smart Innovation & Civic Tech Hackathons",
  "* HackerRank Profile: @nitishkumar74111",
  "* Beyond Code: Cricket, Technology Exploration, Music, Photography, Fitness"
];

// Build PDF stream
let streamContent = "BT\n/F1 14 Tf\n50 780 Td\n(NITISH - RESUME) Tj\n/F1 10 Tf\n0 -22 Td\n";
for (let i = 0; i < contentLines.length; i++) {
  const line = contentLines[i].replace(/[()\\]/g, '\\$&');
  if (i === 0) continue;
  streamContent += `(${line}) Tj\n0 -14 Td\n`;
}
streamContent += "ET";

const streamLen = streamContent.length;

const pdfData = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLen} >>
stream
${streamContent}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000059 00000 n 
0000000116 00000 n 
0000000236 00000 n 
0000000${(288 + streamLen).toString().padStart(3, '0')} 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${350 + streamLen}
%%EOF`;

fs.writeFileSync(dest, pdfData);
console.log("Created valid PDF at:", dest);
