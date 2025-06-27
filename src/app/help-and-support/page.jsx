import Link from "next/link";

const SupportSection = ({ icon, title, children }) => (
  <div className="mb-8 max-[768px]:mb-6">
    <h3 className="font-montserrat text-xl font-semibold text-[#ECECEC] mb-4 flex items-center max-[768px]:text-lg">
      <span className="text-2xl mr-3">{icon}</span>
      {title}
    </h3>
    <div className="ml-11 max-[768px]:ml-0">{children}</div>
  </div>
);

const HelpSupportPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[900px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">🔧</span>
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
            Help & Support
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            At <strong className="text-[#ECECEC]">AceBuddy</strong>, your
            success is our mission. Whether you're preparing for a high-stakes
            exam, exploring our platform for the first time, or contributing to
            our content ecosystem — we're here to help.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="mb-12 max-[768px]:mb-8">
          <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-6 max-[768px]:text-xl">
            🔧 Common Issues & Quick Fixes
          </h2>

          <div className="space-y-6">
            <SupportSection icon="🚫" title="Trouble Logging In?">
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Double-check your email and password</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Ensure your internet connection is stable</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>If the issue persists, reset your password here</span>
                </li>
              </ul>
            </SupportSection>

            <SupportSection icon="📚" title="Can't Generate An Exam Plan?">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                Make sure you've completed the onboarding steps:
              </p>
              <ol className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1 font-semibold">
                    1.
                  </span>
                  <span>Selected your exam</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1 font-semibold">
                    2.
                  </span>
                  <span>Chosen your preferred resource</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1 font-semibold">
                    3.
                  </span>
                  <span>Entered your exam date</span>
                </li>
              </ol>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                Still stuck? Reach out to us and we'll help you get back on
                track.
              </p>
            </SupportSection>

            <SupportSection icon="💳" title="Payment or Card Access Issues?">
              <div className="space-y-4">
                <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                  ACE CARDS purchases are non-recurring. If you didn't receive
                  access:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>Try refreshing your dashboard</span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>Check your email for confirmation</span>
                  </li>
                </ul>
                <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                  For payment disputes or refund requests, email:{" "}
                  <Link
                    href="mailto:support@acebuddy.so"
                    className="text-[#000075] hover:underline"
                  >
                    support@acebuddy.so
                  </Link>
                </p>
              </div>
            </SupportSection>
          </div>
        </div>

        {/* Get Help Fast Section */}
        <div className="mb-12 max-[768px]:mb-8">
          <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-6 max-[768px]:text-xl">
            👩🏽‍💻 Get Help Fast
          </h2>

          <p className="font-inter text-[#909DAC] leading-relaxed mb-6 max-[768px]:text-sm">
            If you need support, you can:
          </p>

          <div className="space-y-6">
            <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-3 flex items-center max-[768px]:text-base">
                <span className="text-xl mr-3">📨</span>
                Email Us Directly:
              </h3>
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                Send questions or reports to{" "}
                <Link
                  href="mailto:support@acebuddy.so"
                  className="text-[#000075] hover:underline font-medium"
                >
                  support@acebuddy.so
                </Link>
              </p>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                Our team typically replies within{" "}
                <strong className="text-[#ECECEC]">24 hours</strong>.
              </p>
            </div>

            <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-3 flex items-center max-[768px]:text-base">
                <span className="text-xl mr-3">💬</span>
                Join the Beta Community Group:
              </h3>
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                Testers can access a private support space via Slack to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Ask questions</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Report bugs</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Get tips from the team and other testers</span>
                </li>
              </ul>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                <Link
                  href="#"
                  className="text-[#000075] hover:underline font-medium"
                >
                  Join the group here
                </Link>
              </p>
            </div>

            <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-3 flex items-center max-[768px]:text-base">
                <span className="text-xl mr-3">🐞</span>
                Report a Bug In-App:
              </h3>
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                Look for the three-dot menu beside features to submit:
              </p>
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>👍 / 👎 feedback</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>🐛 bug reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Explore Help Topics Section */}
        <div className="mb-12 max-[768px]:mb-8">
          <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-6 max-[768px]:text-xl">
            📖 Explore Help Topics
          </h2>

          <p className="font-inter text-[#909DAC] leading-relaxed mb-6 max-[768px]:text-sm">
            We're currently building out a full help center. In the meantime,
            here are some useful guides:
          </p>

          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            <Link
              href="#"
              className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-4 hover:bg-[rgba(0,0,117,0.1)] transition-colors max-[768px]:p-3"
            >
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-2 max-[768px]:text-base">
                Getting Started with AceBuddy Beta
              </h3>
              <p className="font-inter text-[#909DAC] text-sm">
                Learn how to make the most of our beta platform
              </p>
            </Link>

            <Link
              href="#"
              className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-4 hover:bg-[rgba(0,0,117,0.1)] transition-colors max-[768px]:p-3"
            >
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-2 max-[768px]:text-base">
                How Focus Today Works
              </h3>
              <p className="font-inter text-[#909DAC] text-sm">
                Master your daily study sessions
              </p>
            </Link>

            <Link
              href="#"
              className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-4 hover:bg-[rgba(0,0,117,0.1)] transition-colors max-[768px]:p-3"
            >
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-2 max-[768px]:text-base">
                How to Use ACE CARDS
              </h3>
              <p className="font-inter text-[#909DAC] text-sm">
                Get the most from our premium content
              </p>
            </Link>

            <Link
              href="#"
              className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-4 hover:bg-[rgba(0,0,117,0.1)] transition-colors max-[768px]:p-3"
            >
              <h3 className="font-montserrat text-lg font-semibold text-[#ECECEC] mb-2 max-[768px]:text-base">
                Contributor FAQs
              </h3>
              <p className="font-inter text-[#909DAC] text-sm">
                Answers for our content contributors
              </p>
            </Link>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#000075] to-[#0000A0] rounded-xl p-8 max-[768px]:p-6">
            <h2 className="font-montserrat text-2xl font-semibold text-[#ECECEC] mb-4 max-[768px]:text-xl">
              🙌 We're With You
            </h2>
            <p className="font-inter text-[#ECECEC] leading-relaxed mb-6 max-[768px]:text-sm">
              We're here to make sure your study journey is smooth and
              motivating. Whether it's a technical issue, feature request, or
              general confusion — no question is too small.
            </p>
            <blockquote className="font-montserrat italic text-lg text-[#ECECEC] mb-6 max-[768px]:text-base">
              "AceBuddy exists to help you win. So let's get you the support you
              need, fast."
            </blockquote>
            <Link
              href="mailto:support@acebuddy.so"
              className="inline-block bg-white text-[#000075] font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors max-[768px]:px-4 max-[768px]:py-2 max-[768px]:text-sm"
            >
              Need us right now? → support@acebuddy.so
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
