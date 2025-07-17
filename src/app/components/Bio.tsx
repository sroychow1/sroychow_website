import Image from "next/image";

const Bio = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-4">
      <h2 className="text-4xl font-bold mb-6 text-left">Hello World! I&apos;m Shoumik 👋 </h2>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src="/headshot.png"
            alt="Shoumik Roychowdhury - UC Berkeley EECS Student and Software Engineer"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed mb-4">
          I build things because curiosity won&apos;t let me sit still, 
          and I break them because Stack Overflow said it should work 😅. 
          I love solving real problems, chasing clean abstractions, and learning things I swear 
          I already knew last semester 📚.
           I forget to push to GitHub, but not before I write a README that says &quot;WIP&quot; for six months 📝🤡. (def not written by GPT )
          </p>
          <a
            href="https://drive.google.com/file/d/1FbmE2jKY85aW8gTMzHvBBBgeEEs62HiB/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bio; 