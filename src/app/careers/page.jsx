import Link from "next/link";

const JobCard = ({ title, description, requirements }) => (
  <div className="border border-[rgba(236,236,236,0.2)] rounded-xl p-8 bg-[rgba(0,0,117,0.05)] hover:bg-[rgba(0,0,117,0.1)] transition-all duration-300 hover:border-[rgba(236,236,236,0.4)]">
    <h3 className="font-montserrat text-xl font-semibold text-[#ECECEC] mb-4 max-[768px]:text-lg">
      {title}
    </h3>
    <p className="font-inter text-[#909DAC] mb-6 leading-relaxed max-[768px]:text-sm">
      {description}
    </p>
    <div className="space-y-3">
      <h4 className="font-montserrat text-[#ECECEC] font-medium text-base">
        You're a good fit if:
      </h4>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li
            key={index}
            className="font-inter text-[#909DAC] text-sm flex items-start"
          >
            <span className="text-[#000075] mr-3 mt-1">•</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CareersPage = () => {
  const jobs = [
    {
      title: "Product Designer",
      description:
        "Shape the visual and user experience of AceBuddy's learning platform.",
      requirements: [
        "You have a strong portfolio across desktop & mobile products",
        "You design for clarity, motivation, and learning",
        "You understand interaction design, UX writing, and love working with AI prototypes",
        "You're comfortable designing in Figma and leading user interviews when needed",
      ],
    },
    {
      title: "AI/ML Engineer (with Backend Expertise)",
      description:
        "Build and optimize the AI systems that power personalized learning experiences.",
      requirements: [
        "You've built or fine-tuned LLMs, built AI-powered assistants, or launched data-driven products",
        "You can write production-grade code and implement APIs from open models (Llama and other models)",
        "You understand how to build backend logic that adapts to user behavior and learning paths",
        "You have experience with tools like Supabase, Appwrite, or custom Node.js stacks",
      ],
    },
    {
      title: "Instructional Designer",
      description:
        "Create structured, effective learning content that helps students master complex topics.",
      requirements: [
        "You've structured learning content before (preferably for exam prep, EdTech, or fast-paced learning)",
        "You can break complex content into clear modules, topics, and learning objectives",
        "You're experienced with curriculum mapping and sourcing aligned open-access materials",
        "Bonus: You've worked with AI agents in education",
      ],
    },
    {
      title: "User Support & Community Manager",
      description:
        "Be the voice of our users and help build a thriving learning community.",
      requirements: [
        "You can hold space for our early users, understand their frustrations, and celebrate their wins",
        "You're fluent in Slack, email, Discord, and love community engagement",
        "You're organized, warm, and can manage FAQs, bug reports, and shout-outs",
        "You can help test product flows and flag UX gaps",
      ],
    },
    {
      title: "Marketing Specialist (Launch & Brand Growth)",
      description:
        "Drive growth and tell AceBuddy's story to high-stakes test takers worldwide.",
      requirements: [
        "You're excited about building launch campaigns from the ground up",
        "You know how to communicate value in simple, clear words",
        "You've worked with early-stage startups or brand storytelling",
        "Bonus: You're savvy with Webflow, Mailchimp, or SEO + paid marketing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">🚀</span>
          </div>
          <h1
            className="font-montserrat text-5xl font-medium mb-6 max-[768px]:text-4xl max-[480px]:text-3xl"
            style={{
              background:
                "linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Careers at AceBuddy
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            Build what high-stakes test takers truly need.
          </p>
        </div>

        {/* Mission section */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-2xl p-8 max-[768px]:p-6">
            <h2 className="font-montserrat text-center text-2xl font-semibold text-[#ECECEC] mb-6 max-[768px]:text-xl">
              We're radically shaping the future of exam prep
            </h2>
            <div className="space-y-4 font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
              <p>
                We're looking for mission-driven executors ready to own big
                challenges and shape a product that actually matters, especially
                if you've ever experienced the crippling, hand-numbing anxiety
                of preparing for a high-stakes exam, this is your opportunity to
                contribute to a solution that RADICALLY solves that problem.
              </p>
            </div>
          </div>
        </div>

        {/* Jobs section */}
        {/* <div className="mb-16 max-[768px]:mb-12">
          <h2
            className="font-montserrat text-3xl font-medium text-center mb-12 max-[768px]:text-2xl max-[768px]:mb-8"
            style={{
              background:
                "linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Who We're Hiring
          </h2>
          <div className="grid gap-8 max-[768px]:gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div> */}

        {/* Values section */}
        <div className="max-w-4xl mx-auto mb-20 max-[768px]:mb-12">
          <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-8 text-center max-[768px]:text-xl max-[768px]:mb-6">
            What We Care About
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-[768px]:gap-4">
            <div className="text-center">
              <div className="text-2xl mb-3">✅</div>
              <p className="font-inter text-[#909DAC] text-sm">
                We care that you're{" "}
                <strong className="text-[#ECECEC]">skilled</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-3">✅</div>
              <p className="font-inter text-[#909DAC] text-sm">
                We care that you're{" "}
                <strong className="text-[#ECECEC]">hungry to build</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-3">✅</div>
              <p className="font-inter text-[#909DAC] text-sm">
                We care that you're{" "}
                <strong className="text-[#ECECEC]">mission-aligned</strong>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-4 max-[768px]:gap-4">
            <div className="text-center">
              <div className="text-2xl mb-3">❌</div>
              <p className="font-inter text-[#909DAC] text-sm">
                not that you have a fancy degree
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-3">❌</div>
              <p className="font-inter text-[#909DAC] text-sm">
                not that you've worked at a unicorn
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-3">❌</div>
              <p className="font-inter text-[#909DAC] text-sm">
                because our users can't afford half-hearted tools
              </p>
            </div>
          </div>
          <p className="text-sm text-center mt-6">
            👉 Follow us on{" "}
            <Link
              href="https://www.linkedin.com/company/acebuddy-inc/"
              className="text-[#fff] text-center mt-6 hover:underline font-semibold transition-all duration-300"
            >
              LinkedIn
            </Link>{" "}
            to see open positions as they’re announced.
          </p>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-6 max-[768px]:text-xl">
            No Open Positions for you?{" "}
          </h2>
          <p className="font-inter text-[#909DAC] mb-8 max-[768px]:text-sm">
            If you resonate with our mission and think your profile would be a
            great fit, send an email with your CV + portfolio or past work
            samples to
            <Link
              href="mailto:careers@acebuddy.so"
              className="inline-block text-white underine font-semibold font-montserrat"
            >
              careers@acebuddy.so
            </Link>{" "}
            and let us know why AceBuddy excites you and the role you’d love to
            have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
