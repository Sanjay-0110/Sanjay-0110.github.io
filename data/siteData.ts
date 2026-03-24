// data/siteData.ts
// ─── Edit this file to update all site content ───────────────────────────────

export const profile = {
  name: "Sanjay",
  fullName: "Sanjay Keerthi",
  role: "Data Scientist",
  tagline: "Turning messy data into clear decisions.",
  bio: "I build machine learning systems and analytical pipelines that help organisations understand what's happening and what to do next.",
  location: "Manchester, England",
  email: "sjai58066@gmail.com",
  avatarUrl: "/san.jpeg",
  cvUrl: "/cv.pdf",
  availableForWork: true,
  education: "Msc Data Science University of Manchester 2025-2026",
};

export const navigation = [
  { label: "home", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
  { label: "research", href: "/research" },
  { label: "blog", href: "/blog" },
  { label: "principles", href: "/principles" },
  { label: "contact", href: "/contact" },
];

export const social = [
  { label: "GitHub", href: "https://github.com/sanjay-0110", icon: "github", username: "@sanjay-0110" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjayk1415/", icon: "linkedin", username: "@sanjayk1415" },
  { label: "Twitter / X", href: "https://x.com/TheSan1409", icon: "twitter", username: "@TheSan1409" },
  { label: "Email", href: "sjai58066@gmail.com", icon: "mail", username: "@sjai58066@gmail.com" },
];

export const experience = [
  {
    id: "exp-1",
    company: "VCodez",
    role: "Data Scientist Intern",
    period: "Feb 2025 – Jul 2025",
    location: "Chennai, India",
    description:
      "Building and deploying machine learning models to solve business problems. Involved in the full ML pipeline from data preprocessing and feature engineering through to model evaluation and integration. Applied cross-validation and hyperparameter tuning techniques to improve model generalisation, gaining hands-on experience with the gap between notebook performance and production behaviour.",
    tags: ["Python", "scikit-learn", "Machine Learning"],
  },
  {
    id: "exp-2",
    company: "PrepInsta",
    role: "Data Analyst Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    description:
      "Delivered end-to-end analytics projects across a team of four, combining EDA, machine learning, and Tableau dashboards to surface actionable insights. Built a customer relationship analysis dashboard that consolidated key metrics into a single view for stakeholders. Wrote reusable Python ETL scripts to automate data cleaning pipelines, reducing manual preprocessing effort and ensuring consistent, reproducible inputs across all models.",
    tags: ["Python", "SQL", "Tableau", "EDA", "Machine Learning"],
  },
  {
    id: "exp-3",
    company: "InternSavvy",
    role: "Data Analyst Intern",
    period: "Aug 2023 – Sep 2023",
    location: "Remote",
    description:
      "Analysed customer behaviour using large datasets to improve targeted marketing, contributing to a 15 % increase in campaign ROI. Built a school enrolment prediction model achieving 92 % accuracy. Developed Python and SQL dashboards that cut report preparation time by 20 %. Gained practical experience handling messy real-world data — dealing with missing values, class imbalance, and feature scaling — building strong intuition for data quality issues before modelling.",
    tags: ["Python", "SQL", "Machine Learning", "Data Visualisation"],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "Traffic Flow Optimization using LSTM",
    summary:
      "Trained a sequential LSTM model on metro traffic dataset to predict and optimise traffic flow patterns. Handled time-series preprocessing, sliding window feature engineering, and multi-step forecasting to capture temporal dependencies in congestion data.",
    tags: ["Python", "LSTM", "TensorFlow", "Time Series", "Pandas"],
    githubUrl: "https://github.com/Sanjay-0110/Traffic_Prediction_Project",
    liveUrl: "",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Stock Prices Prediction",
    summary:
      "Built a predictive model for S&P 500 stock prices using historical market data. Applied feature engineering on OHLCV data, experimented with regression and LSTM approaches, and evaluated performance using RMSE and directional accuracy metrics.",
    tags: ["Python", "scikit-learn", "LSTM", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Sanjay-0110/StockMarket-Prediction",
    liveUrl: "",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Number Plate Detection with Voice Output",
    summary:
      "Built a CNN-based number plate detection pipeline that identifies and extracts licence plates from images, then converts the recognised text to a voice output using a text-to-speech engine. Trained on annotated vehicle image datasets.",
    tags: ["Python", "CNN", "OpenCV", "TensorFlow", "pyttsx3"],
    githubUrl: "https://github.com/Sanjay-0110/mini_project",
    liveUrl: "",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Weather Prediction using Machine Learning",
    summary:
      "Developed a weather forecasting model using linear regression trained on historical meteorological data. Performed EDA on temperature, humidity, and pressure features, and built a clean prediction interface to display forecasted conditions.",
    tags: ["Python", "scikit-learn", "Linear Regression", "EDA", "Matplotlib"],
    githubUrl: "https://github.com/Sanjay-0110/Weather_prediction",
    liveUrl: "",
    featured: false,
  },
  {
    id: "proj-5",
    title: "California Housing Price Prediction",
    summary:
      "Predicted median house values across California districts using the classic census dataset. Compared multiple regression algorithms, performed feature scaling and correlation analysis, and visualised geographic price distributions using heatmaps.",
    tags: ["Python", "scikit-learn", "Regression", "Seaborn", "Pandas"],
    githubUrl: "https://www.kaggle.com/code/sanjay1415/california-housing-predictions",
    liveUrl: "",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Titanic Survival Prediction",
    summary:
      "Classic ML case study predicting passenger survival on the Titanic. Focused on handling missing data, encoding categorical variables, and comparing classification models including logistic regression, decision trees, and random forests with cross-validation.",
    tags: ["Python", "scikit-learn", "Classification", "EDA", "Pandas"],
    githubUrl: "https://www.kaggle.com/code/sanjay1415/titanic-analysis-project",
    liveUrl: "",
    featured: false,
  },
  {
    id: "proj-7",
    title: "Note Application using Python",
    summary:
      "A desktop note-taking application built in Python to consolidate core programming skills into a practical project. Implemented create, read, update, and delete functionality with a simple GUI, demonstrating clean application structure suitable for beginners.",
    tags: ["Python", "Tkinter", "File I/O"],
    githubUrl: "https://github.com/Sanjay-0110/Notepad_application",
    liveUrl: "",
    featured: false,
  },
];

export const principles = [
  {
    id: "p-1",
    index: "01",
    title: "Reproducibility is not optional",
    body: "Every analysis should be a function: given the same inputs, it produces the same outputs. Version control data, environments, and random seeds. If a colleague cannot reproduce your result independently, the result does not exist.",
  },
  {
    id: "p-2",
    index: "02",
    title: "Simpler models ship and survive",
    body: "A logistic regression that goes live and gets maintained beats a transformer that never clears code review. Optimise for comprehensibility first; add complexity only when simpler approaches have demonstrably failed.",
  },
  {
    id: "p-3",
    index: "03",
    title: "Metrics are hypotheses, not ground truth",
    body: "Every metric encodes a judgement about what matters. Interrogate your loss functions. Question your evaluation sets. The model that maximises your metric may be solving the wrong problem entirely.",
  },
  {
    id: "p-4",
    index: "04",
    title: "Writing is thinking",
    body: "If you cannot explain a model decision in plain language, you do not understand it yet. Write the README before the code. Document assumptions, not just implementation.",
  },
  {
    id: "p-5",
    index: "05",
    title: "Slow down on data preparation",
    body: "Ninety percent of modelling errors originate in data handling: leakage, silent null handling, misaligned timestamps, distribution shift. Invest time here before tuning hyperparameters.",
  },
  {
    id: "p-6",
    index: "06",
    title: "Disagree in writing, commit in code",
    body: "Technical disagreements belong in pull request comments and design docs, not in passive implementation choices. State your concern clearly, give the team a chance to respond, then align and execute together.",
  },
];

export const research = [
  {
    id: "r-1",
    title: "Graph-Based Knowledge Representation for Biomedical Question Answering",
    venue: "ESWC 2021",
    year: "2021",
    authors: "Sanjay Kumar, A. O'Brien, M. Decker",
    abstract:
      "We propose a hybrid retrieval-augmented architecture that combines sparse knowledge graphs with dense vector retrieval to improve factual consistency in biomedical QA.",
    pdfUrl: "/papers/graph-kgqa-eswc2021.pdf",
    arxivUrl: "https://arxiv.org/abs/2101.00001",
  },
  {
    id: "r-2",
    title: "Data Drift Detection in Production ML Pipelines: A Comparative Study",
    venue: "NeurIPS Workshop on ML Systems, 2022",
    year: "2022",
    authors: "Sanjay Kumar, L. Walsh",
    abstract:
      "We benchmark nine statistical and learned drift detectors across tabular, image, and text modalities, highlighting the gap between offline evaluation and production performance.",
    pdfUrl: "/papers/drift-detection-neurips2022.pdf",
    arxivUrl: "https://arxiv.org/abs/2201.00002",
  },
];

export const blogMeta = {
  description:
    "Occasional writing on machine learning, data engineering, and working with uncertainty.",
};
