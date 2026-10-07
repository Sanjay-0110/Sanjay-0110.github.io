// data/siteData.ts
// ─── Edit this file to update all site content ───────────────────────────────

export const profile = {
  name: "Sanjay",
  fullName: "Sanjay Keerthi",
  role: "Data Scientist",
  tagline: "Turning messy data into clear decisions.",
  bio: "MSc Data Science (University of Manchester). I build forecasting and computer vision models, most recently studying why medical imaging models fail when moved between hospitals.",
  location: "Manchester, England",
  email: "sjai58066@gmail.com",
  avatarUrl: "/sanjay.jpg",
  cvUrl: "/cv.pdf",
  availableForWork: true,
  availability: "open to data scientist & ML roles · UK",
  education: "MSc Data Science, University of Manchester (2025–2026)",
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
  { label: "Twitter / X", href: "https://x.com/debugmind", icon: "twitter", username: "@debugmind" },
  { label: "Email", href: "mailto:sjai58066@gmail.com", icon: "mail", username: "sjai58066@gmail.com" },
];

export const experience = [
  {
    id: "exp-1",
    company: "VCodez",
    role: "Data Scientist Intern",
    period: "Jan 2025 – Jul 2025",
    location: "Remote",
    description:
      "Built automated data ingestion, cleaning, and quality-validation pipelines in Airflow for 10M+ row climate-monitoring datasets, cutting 6+ hours of manual processing per sprint. Validated PyTorch and TensorFlow model outputs before they informed decisions, auditing for overfitting and data leakage. Built LSTM and ARIMA forecasting models on the validated pipelines, reaching 91% accuracy.",
    tags: ["Python", "Airflow", "PyTorch", "TensorFlow", "LSTM", "ARIMA"],
  },
  {
    id: "exp-2",
    company: "PrepInsta",
    role: "Data Analytics Intern",
    period: "Jun 2024 – Oct 2024",
    location: "Remote",
    description:
      "Ran exploratory and statistical analysis on customer campaign-spend data to find data quality issues and inform feature engineering. Worked with a team of four on cross-validation strategy for imbalanced classification models, improving F1-score by 15%. Cut reporting turnaround by 25% with Python-based analysis and Tableau dashboards.",
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
    id: "proj-dissertation",
    title: "Domain-Robust Polyp Detection (MSc Dissertation)",
    summary:
      "Investigates why polyp-segmentation models fail on colonoscopy images from other hospitals. Trained a compact 860K-parameter model on Kvasir-SEG only and tested it with no fine-tuning: Dice fell from 0.72 in-domain to 0.40 on CVC-ClinicDB (−45%). A Shades-of-Gray colour normaliser barely changed that drop (−45.2% vs −45.8% without it), so the hypothesis that scanner colour and lighting cause the gap was not supported. Compressing only the middle encoder layers, rather than all layers equally, gave a smaller cross-domain drop on both external datasets (CVC-ClinicDB −41.5% vs −43.6%, ETIS-Larib −62.7% vs −65.1%).",
    tags: ["Python", "PyTorch", "Segmentation", "Domain Shift", "Medical Imaging", "HPC"],
    githubUrl: "https://github.com/Sanjay-0110/Final-Dissertation",
    liveUrl: "",
    featured: true,
  },
  {
    id: "proj-1",
    title: "Traffic Flow Optimization using LSTM",
    summary:
      "Forecasts hourly traffic volume on the Minneapolis–St. Paul corridor with an LSTM trained on historical, weather, and time features, reaching an RMSE of 12.4 and 21% lower error than an ARIMA baseline. Served through a Streamlit app with an interactive route map.",
    tags: ["Python", "LSTM", "TensorFlow", "Time Series", "Streamlit", "Pandas"],
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
    featured: false,
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
    id: "proj-8",
    title: "FIFA World Cup 2026 Prediction",
    summary:
      "A Python-based World Cup simulation project that uses static ELO ratings and team attack/defense profiles to model match outcomes with Poisson score probabilities. It simulates group stage results and a full knockout bracket, then runs Monte Carlo trials to estimate each team’s chances of reaching rounds like R16, QF, SF, final, and winning the tournament.",
    tags: ["Python", "Monte Carlo", "FIFA 2026", "sports analytics", "simulation"],
    githubUrl: "https://github.com/Sanjay-0110/FIFA26",
    liveUrl: "",
    featured: true,
  },
  {
    id: "proj-9",
    title: "Tamil Nadu 2026 Election Analysis",
    summary:
      "A Tamil Nadu election analysis project that scrapes 2026 ECI results and 2021 historical data, cleans vote/seat datasets, and supports exploratory analysis of party performance, vote share, and constituency-level trends.",
    tags: ["Python", "Election", "Analytics"],
    githubUrl: "https://github.com/Sanjay-0110/TN26-ELECTION",
    liveUrl: "",
    featured: false,
  },
];

// Skills shown on the home page. Each one points to where it was used:
// `ref` is a project or experience id from above, `href` an external link.
// Only list a skill here if you can point to real work for it.
export type SkillEvidence = { label: string; ref?: string; href?: string };
export type Skill = { name: string; usedIn: SkillEvidence[] | string };

export const skills: { group: string; items: Skill[] }[] = [
  {
    group: "ml & deep learning",
    items: [
      { name: "PyTorch", usedIn: [{ label: "dissertation", ref: "proj-dissertation" }, { label: "vcodez", ref: "exp-1" }] },
      { name: "TensorFlow / Keras", usedIn: [{ label: "traffic lstm", ref: "proj-1" }, { label: "number plate cnn", ref: "proj-3" }] },
      { name: "scikit-learn", usedIn: [{ label: "stock prices", ref: "proj-2" }, { label: "traffic lstm", ref: "proj-1" }] },
      { name: "Computer vision", usedIn: [{ label: "dissertation", ref: "proj-dissertation" }, { label: "number plate cnn", ref: "proj-3" }] },
      { name: "Time-series forecasting", usedIn: [{ label: "traffic lstm", ref: "proj-1" }, { label: "vcodez", ref: "exp-1" }] },
    ],
  },
  {
    group: "data & pipelines",
    items: [
      { name: "Python", usedIn: "every project" },
      { name: "SQL", usedIn: [{ label: "prepinsta", ref: "exp-2" }, { label: "internsavvy", ref: "exp-3" }] },
      { name: "Pandas / NumPy", usedIn: [{ label: "traffic lstm", ref: "proj-1" }, { label: "stock prices", ref: "proj-2" }] },
      { name: "Airflow", usedIn: [{ label: "vcodez", ref: "exp-1" }] },
    ],
  },
  {
    group: "stats & methods",
    items: [
      { name: "Monte Carlo simulation", usedIn: [{ label: "fifa 26", ref: "proj-8" }, { label: "blog post", href: "https://medium.com/@sanjaykeerthi1415/from-casino-to-code-understanding-monte-carlo-simulation-in-python-70328151ae47" }] },
      { name: "Model validation & leakage checks", usedIn: [{ label: "dissertation", ref: "proj-dissertation" }, { label: "vcodez", ref: "exp-1" }, { label: "prepinsta", ref: "exp-2" }] },
      { name: "Imbalanced classification", usedIn: [{ label: "prepinsta", ref: "exp-2" }, { label: "internsavvy", ref: "exp-3" }] },
    ],
  },
];

export const tools = ["Git", "Docker", "Tableau", "Streamlit", "Linux / SLURM (HPC)"];

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

export const blogMeta = {
  description:
    "Occasional writing on machine learning, data engineering, and working with uncertainty.",
};
