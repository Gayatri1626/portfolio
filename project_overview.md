# Resume Model & AI Career Coach

A comprehensive platform for AI-powered resume generation, analysis, and career guidance. This project leverages advanced LLMs and NLP techniques to help users build professional resumes and navigate their career paths.

## 🚀 Tech Stack

### **Frontend**
- **HTML5/CSS3**: Core structure and design. Includes multiple responsive templates.
- **JavaScript**: Client-side logic for dynamic interactions.
- **Vanilla CSS**: Premium styling with dark mode support.

### **Backend**
- **Framework**: Python (Flask)
- **API**: Flask-CORS for handling cross-origin requests.
- **Environment**: `python-dotenv` for secure API key management.
- **Authentication**: Flask-Bcrypt and custom MongoDB session management.

### **Database**
- **Primary DB**: MongoDB (Atlas)
- **Collections**:
  - `users`: User profiles and authentication data.
  - `finalized_resumes`: Completed resume records.
  - `draft_resumes`: In-progress resume data.
  - `session`: Active user sessions.

### **AI & NLP (The Engine)**
- **LLM Engine**: Google **Gemini 2.0 Flash** via `google-generativeai`.
- **Entity Extraction**: `pdfplumber` and `xml.etree.ElementTree` for raw text extraction from PDF/DOCX.
- **Custom NER**: **spaCy** for Named Entity Recognition training and data preparation.
- **PDF Processing**: `pdf2image`, `docx2pdf`, and headless **LibreOffice** for high-fidelity document conversion.

---

## 🛠️ Core Features

### 1. **AI-Powered Resume Builder**
- **Intelligent Generation**: Generate professional titles, objectives, responsibilities, and skills based on specific job roles using Gemini 2.0 Flash.
- **Multiple Templates**: 11+ professional resume templates (`template1.py` to `template11.py`) and cover letter templates.
- **Real-time Preview**: View changes as they are made.

### 2. **Resume Analyzer**
- **Deep Extraction**: Extracts structured data (Name, Contact, Experience, Education) from uploaded PDFs and DOCX files.
- **Career Gap Analysis**: Identifies skill gaps and provides improvement suggestions.
- **Keyword Optimization**: Suggests enhancements for better ATS (Applicant Tracking System) performance.

### 3. **AI Career Coach**
- **Tailored Advice**: Provides a step-by-step learning path, recommended books, and certifications for specific job titles.
- **Interview Prep**: Integrated interview coaching features to prepare users for specific roles.
- **Resource Linking**: Provides direct links to courses and books for career growth.

---

## 🔄 Project Flow

1.  **Onboarding**: User registers and authenticates through the landing page.
2.  **Creation Path**:
    - **Drafting**: User selects a template and fills in details manually or via AI suggestions.
    - **Generation**: Flask server calls Gemini API to polish content.
3.  **Analysis Path**:
    - User uploads an existing resume.
    - System extracts text -> Gemini analyzes content -> System returns an HTML-formatted dashboard with advice.
4.  **Finalization**: Resume is generated as a `docx` file, which can then be converted to a professional PDF using the internal LibreOffice-based engine.
5.  **Export**: User downloads the finalized, high-quality professional document.

---

## 🧠 The Engine: How It Works

The system uses a **Hybrid AI Approach**:
- **Generative AI (Gemini 2.0 Flash)**: Used for high-level reasoning, creative writing, and complex data mapping where flexibility is required.
- **Deterministic Processing**: Traditional XML and PDF parsing ensure that structural elements (like headers, footers, and tables) are captured accurately.
- **Custom NLP (spaCy)**: The project includes a dedicated pipeline for generating training data to potentially transition from LLM-based extraction to lighter, custom-trained NER models for faster and more cost-effective entity extraction.
