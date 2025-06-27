import Link from "next/link";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(0,0,117,0.1)] transition-all duration-300 hover:border-[rgba(236,236,236,0.3)]">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-3 max-[768px]:text-base">
      {title}
    </h3>
    <p className="font-inter text-[#909DAC] text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="flex items-start space-x-4 max-[768px]:space-x-3">
    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-full flex items-center justify-center text-white font-montserrat font-semibold text-sm">
      {number}
    </div>
    <div>
      <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-2 max-[768px]:text-base">
        {title}
      </h3>
      <p className="font-inter text-[#909DAC] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const EarnPage = () => {
  const benefits = [
    {
      icon: "📚",
      title: "Transform Your Notes",
      description:
        "Turn your personal prep notes into published ACE CARDS that help learners worldwide",
    },
    {
      icon: "🌍",
      title: "Reach Real Learners",
      description:
        "Your content helps high-stakes exam takers preparing for real exams",
    },
    {
      icon: "💰",
      title: "Recurring Income",
      description: "Earn ongoing revenue as your decks gain traction and usage",
    },
    {
      icon: "⭐",
      title: "Get Featured",
      description:
        "Build your reputation as an in-app contributor and knowledge expert",
    },
  ];

  const examTypes = [
    "College Entrance Exams (SAT, JAMB, LSAT, MCAT…)",
    "Professional Certifications (PMP, CFA, USMLE…)",
    "Language Proficiency Tests (IELTS, TOEFL…)",
    "National K12 Exams (WASSCE, A-Levels, CBSE…)",
  ];

  const steps = [
    {
      number: "1",
      title: "Apply to Join the Contributor Pilot",
      description:
        "Fill out the interest form and we'll get you started with our contributor program.",
    },
    {
      number: "2",
      title: "Get Access to Contributor Materials",
      description:
        "We'll send you our Contributor Kit, including format guidelines, tips, and tools.",
    },
    {
      number: "3",
      title: "Submit Your First Draft",
      description:
        "Your notes will be reviewed by our in-house vetting team with feedback to improve quality.",
    },
    {
      number: "4",
      title: "Go Live on AceBuddy",
      description:
        "Once approved, your flashcards will be available in-app with contributor credit and ongoing earnings.",
    },
  ];

  const eligibleContributors = [
    "Test takers with solid prep notes",
    "Educators & subject experts",
    "Academic tutors",
    "Study group organizers",
    "Former top scorers & enthusiasts",
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">💎</span>
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
            Earn with AceBuddy
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            Turn Your Study Notes into Passive Income
          </p>
        </div>

        {/* Mission statement */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-2xl p-8 text-center max-[768px]:p-6">
            <p className="font-inter text-[#909DAC] text-lg leading-relaxed mb-4 max-[768px]:text-base">
              At AceBuddy, we believe great notes shouldn't stay hidden in your
              folder. Whether you're a student, graduate, educator, or exam prep
              enthusiast, your knowledge can help thousands of learners{" "}
              <em>and</em> earn you recurring income.
            </p>
          </div>
        </div>

        {/* What is the program */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            What is the Contributor Program?
          </h2>
          <div className="space-y-6 font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
            <p>
              AceBuddy Contributors create precise, high-impact study content
              used to power{" "}
              <strong className="text-[#ECECEC]">ACE CARDS</strong>, our
              flagship spaced-repetition flashcards product. Your contributed
              content helps high-stakes exam takers across the world{" "}
              <em>retain what matters</em>.
            </p>
            <p>
              As a contributor, you'll join a growing community of knowledge
              creators who:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 max-[768px]:gap-4">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* What you'll contribute */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            What You'll Contribute
          </h2>
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-2xl p-8 max-[768px]:p-6">
            <p className="font-inter text-[#909DAC] mb-6 max-[768px]:text-sm">
              You'll be crafting:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                <span className="text-green-400 mr-3 mt-1">✅</span>
                <span>
                  <strong className="text-[#ECECEC]">ACE CARDS decks</strong> —
                  high-quality, syllabus-aligned flashcards designed for spaced
                  repetition
                </span>
              </li>
              <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                <span className="text-green-400 mr-3 mt-1">✅</span>
                <span>Based on exams you've taken or mastered</span>
              </li>
            </ul>
            <p className="font-inter text-[#909DAC] mb-4 max-[768px]:text-sm">
              <strong className="text-[#ECECEC]">
                For learners preparing for:
              </strong>
            </p>
            <ul className="space-y-2">
              {examTypes.map((exam, index) => (
                <li
                  key={index}
                  className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm"
                >
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>{exam}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            How It Works
          </h2>
          <div className="space-y-8 max-[768px]:space-y-6">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>

        {/* Earnings section */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            Earnings & Recognition
          </h2>
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-2xl p-8 max-[768px]:p-6">
            <p className="font-inter text-[#909DAC] mb-6 max-[768px]:text-sm">
              AceBuddy Contributors earn{" "}
              <strong className="text-[#ECECEC]">recurring income</strong> based
              on:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                <span className="mr-3 mt-1">💳</span>
                <span>
                  The number of users who purchase or use your card sets
                </span>
              </li>
              <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                <span className="mr-3 mt-1">🔁</span>
                <span>Continued usage and engagement over time</span>
              </li>
              <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                <span className="mr-3 mt-1">💼</span>
                <span>
                  Your role as an early contributor means you gain{" "}
                  <strong className="text-[#ECECEC]">
                    founding creator benefits
                  </strong>
                </span>
              </li>
            </ul>
            <div className="border-t border-[rgba(236,236,236,0.1)] pt-6">
              <p className="font-inter text-[#909DAC] mb-4 max-[768px]:text-sm">
                This isn't just a side hustle, it's a long-term opportunity to:
              </p>
              <ul className="grid md:grid-cols-3 gap-4 max-[768px]:gap-2">
                <li className="font-inter text-[#909DAC] text-center max-[768px]:text-sm">
                  <span className="block text-lg mb-1">📈</span>
                  Grow your impact
                </li>
                <li className="font-inter text-[#909DAC] text-center max-[768px]:text-sm">
                  <span className="block text-lg mb-1">📂</span>
                  Build a learning portfolio
                </li>
                <li className="font-inter text-[#909DAC] text-center max-[768px]:text-sm">
                  <span className="block text-lg mb-1">🌍</span>
                  Support learners globally
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality standards */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            Quality Standards & Review
          </h2>
          <div className="space-y-6 font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
            <p>
              We take content quality seriously. Before any content goes live:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#000075] mr-3 mt-1">•</span>
                <span>
                  All submissions are{" "}
                  <strong className="text-[#ECECEC]">
                    reviewed by our internal team
                  </strong>{" "}
                  for accuracy, clarity, and helpfulness
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000075] mr-3 mt-1">•</span>
                <span>
                  Content must be{" "}
                  <strong className="text-[#ECECEC]">original</strong>,
                  syllabus-aligned, and free from copyright issues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000075] mr-3 mt-1">•</span>
                <span>
                  Proper formatting, logical card structure, and spaced recall
                  principles must be followed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Who can apply */}
        <div className="max-w-4xl mx-auto mb-16 max-[768px]:mb-12">
          <h2 className="font-montserrat text-3xl font-medium text-[#ECECEC] mb-8 text-center max-[768px]:text-2xl max-[768px]:mb-6">
            Who Can Apply?
          </h2>
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-2xl p-8 max-[768px]:p-6">
            <p className="font-inter text-[#909DAC] mb-6 max-[768px]:text-sm">
              We welcome:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-6">
              {eligibleContributors.map((contributor, index) => (
                <li
                  key={index}
                  className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm"
                >
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>{contributor}</span>
                </li>
              ))}
            </ul>
            <p className="font-inter text-[#ECECEC] font-medium text-center">
              No degree required. Just a sharp mind and valuable content.
            </p>
          </div>
        </div>

        {/* Pilot program CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[rgba(0,0,117,0.1)] to-[rgba(0,0,160,0.1)] border border-[rgba(236,236,236,0.2)] rounded-2xl p-8 max-[768px]:p-6">
            <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-4 max-[768px]:text-xl">
              Pilot Program Is Now Open
            </h2>
            <p className="font-inter text-[#909DAC] mb-8 leading-relaxed max-[768px]:text-sm">
              We're launching a limited{" "}
              <strong className="text-[#ECECEC]">
                Pilot Contributor Program
              </strong>{" "}
              to onboard our first wave of trusted contributors. As a pilot
              contributor, you'll help us shape how the program works, receive
              extra visibility, and be among the first to{" "}
              <strong className="text-[#ECECEC]">
                monetize your study skills
              </strong>
              .
            </p>
            <Link
              href="https://forms.fillout.com/t/9QDQgUUtsSus"
              className="inline-block font-montserrat border-[1.24px] border-[rgba(255,255,255,0.3)] px-8 py-3 rounded-full text-base font-normal text-[#F2F4F8] bg-transparent hover:bg-[#000075] hover:font-semibold transition-all duration-300 mb-6"
            >
              Apply Now to Join the Pilot
            </Link>
            <div className="border-t border-[rgba(236,236,236,0.1)] pt-6">
              <p className="font-inter text-[#909DAC] text-sm mb-4">
                Got Questions?
              </p>
              <Link
                href="mailto:contributors@acebuddy.so"
                className="font-inter text-[#000075] hover:underline text-sm"
              >
                contributors@acebuddy.so
              </Link>
              <p className="font-inter text-[#909DAC] text-sm mt-2">
                We're excited to help you get started and earn with your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnPage;
