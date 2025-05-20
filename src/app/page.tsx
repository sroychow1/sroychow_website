import Bio from './components/Bio';
import Timeline from './components/Timeline';
import Research from './components/Research';
import EducationTimeline from './components/EducationTimeline';

const experiences = [
  {
    imageUrl: '/logos/amazon.png',
    title: 'Software Development Engineer Intern',
    company: 'Amazon.com, Inc.',
    date: 'May 2025 - August 2025',
    description: 'Welcome to the jungle?? idk yet!.'
  },
  {
    imageUrl: '/logos/actri.png',
    title: 'Research Assistant',
    company: 'Altman Clinical and Translational Research Institute (ACTRI)',
    date: 'May 2024 - August 2024',
    description: ' Learned more about MR, from a clinical perspective. '
  },
  {
    imageUrl: '/logos/videoxrm.jpeg',
    title: 'MLE/SWE',
    company: 'VideoXRM LLC',
    date: 'June 2023 - May 2024',
    description: 'Did some cool LLM stuff before it was cool.'
  },
  {
    imageUrl: '/logos/bair.png',
    title: 'Research Assistant',
    company: 'Berkeley Artificial Intelligence Research (BAIR)',
    date: 'Jan 2023 - Present',
    description: 'Got to work with some cool people on real engineering problems/research and was touched by MR as Miki says.'
  },
  {
    imageUrl: '/logos/hypergiant.jpeg',
    title: 'MLE Intern',
    company: 'HyperGiant Industries LLC',
    date: 'May 2021 - August 2021',
    description: 'Annoyed that AutoDC was not a real project so we made it one.'
  },
];

const education = [
  {
    imageUrl: '/logos/berkeley.png',
    degree: 'B.S.E Electrical Engineering and Computer Sciences (EECS)',
    school: 'University of California, Berkeley',
    date: 'Expected May 2026',
    description: 'Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Databases, Computer Architecture, Computer Security, Discrete Math & Probability, Linear Algebra, Optimization, Advanced Probability and Stochastic Processes, Communication Networks, Circuits, Signal Processing, Computational Imaging'
  }
];

const researchProjects = [
  {
    title: "Memz AI (Hackathon Build)",
    description: "MemZ uses AI to bring memories to life, transforming the way Alzheimer's patients interact with their past.Tools and Frameworks used: NeRF Studio, AWS Lambda, DynamoDB, EC2, React, Typescript, Groq, Hume.",
    devpostLink: "https://devpost.com/software/memz",
    date: "2024",
    coauthors: ["Yash Jain", "Kushal Konad","Rushil Desai"]
  },
  {
    title: "Mechanistic Interpretability of Vision Language Action Model",
    description: "Applied existing Mechanistic Interpretability techniques to retrieve interpretable visual and language representations of ascending VLA model reasoning informing final VLA model output [robot actuation commands]. Engineered novel interventions- inspired by existing Mechanistic Interpretability techniques - to make VLA models safer.",
    date: "2024",
    devpostLink: "https://docs.google.com/presentation/d/1cONIV6yyux6v5dF7RJ8scAe_uyBNEKpQ/edit?usp=sharing&ouid=116574508787426392712&rtpof=true&sd=true",
    coauthors: ["Amil Dravid", "Bear Haon"]
  },
  {
    title: "Spatial Mapping of Entities Using WIFI",
    description: "Developed an automated novel neural-network architecture and pipeline, aimed to quantitatively derive insights on router placement. Inspired from DensePose From Wifi(Geng, J. et.al)",
    devpostLink: "https://drive.google.com/file/d/17fBxYcZ4j4MpO8XV4uM8g3IDNynB0LEW/view?usp=sharing",
    date: "2023",
    coauthors: ["Nihal Bonia", "Wills Stern"]
  },
  {
    title: "Xnet: A Novel Generative Deep Learning Architecture for Fast MRI Reconstruction",
    description: "Developed pipeline for simulating subsampled sparse k-space data, for fast MR reconstruction. Designed and developed a new GAN architecture, to simulate L-1 loss, via TensorFlow, with two groundbreaking innovations: introduction of a new perception loss function, and cross pollination of tensors. (ACM Cutler-Bell Winner)",
    devpostLink: "https://awards.acm.org/award_winners/roychowdhury_8319791",
    youtubeLink: "https://www.youtube.com/watch?v=your-video-id",
    date: "2022"
  },
  {
    title: "AutoDC: Automated data-centric processing",
    description: "An automated data-centric tool (AutoDC), similar to the purpose of AutoML, aims to speed up the dataset improvement processes. In our preliminary tests on 3 open source image classification datasets, AutoDC is estimated to reduce roughly 80% of the manual time for data improvement tasks, at the same time, improve the model accuracy by 10-15% with the fixed ML code.",
    githubLink: "https://github.com/gohypergiant/AutoDC",
    paperLink: "https://arxiv.org/abs/2111.12548",
    date: "2021",
    youtubeLink: "https://neurips.cc/virtual/2021/38244",
    coauthors: ["Zac Yung-Chun Liu", "Scott Tarlow","Akash Nair", "Shweta Badhe", "Tejas Shah"]
  },
  {
    title: "A Modular Framework to Predict Alzheimer's Disease Progression Using Conditional Generative Adversarial Networks",
    description: "Designed and engineered a series of CDCGANS simulating the rate of progression of Alzheimer's Disease and the atrophy of the brain over time. (Published IEEE IJCNN 2020)",
    paperLink: "https://doi.org/10.1109/IJCNN48605.2020.9206875",
    date: "2020",
    coauthors: ["Shounak Roychowdhury"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Bio />
      <section className="py-4 bg-white">
        <Timeline experiences={experiences} />
      </section>
      <section className="py-4 bg-white">
        <Research projects={researchProjects} />
      </section>
      <section className="py-4 bg-white">
        <EducationTimeline education={education} />
      </section>
    </main>
  );
}
