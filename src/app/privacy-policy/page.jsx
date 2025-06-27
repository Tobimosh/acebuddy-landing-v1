import Link from "next/link";

const SectionHeader = ({ number, title }) => (
  <h2 className="font-montserrat text-xl font-semibold text-[#ECECEC] mb-4 flex items-center max-[768px]:text-lg">
    <span className="w-8 h-8 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
      {number}
    </span>
    {title}
  </h2>
);

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[900px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">🔒</span>
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
            Privacy Policy
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            <strong className="text-[#ECECEC]">Effective Date:</strong>{" "}
            18/06/2025
            <br />
            <strong className="text-[#ECECEC]">Registered Entity:</strong>{" "}
            AceBuddy Technologies Ltd., Lagos, Nigeria
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 max-[768px]:mb-8">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
            <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
              Your privacy matters to us. This Privacy Policy explains how we
              collect, use, and protect your personal data when you use
              AceBuddy's web app, services, and tools (collectively, the
              "Services").
            </p>
          </div>
        </div>

        {/* Privacy sections */}
        <div className="space-y-8 max-[768px]:space-y-6">
          {/* Section 1 */}
          <div>
            <SectionHeader number="1" title="What Information We Collect" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-4 max-[768px]:text-sm">
                We collect only what we need to help you study smarter.
              </p>

              <div className="mb-6">
                <h3 className="font-montserrat text-lg font-medium text-[#ECECEC] mb-3 max-[768px]:text-base">
                  Personal Information
                </h3>
                <ul className="space-y-2">
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#ECECEC]">
                        Name and email address
                      </strong>{" "}
                      (to create your account)
                    </span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#ECECEC]">
                        Exam type and prep details
                      </strong>{" "}
                      (e.g., exam date, subject focus)
                    </span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-[#ECECEC]">
                        Preferred learning resource
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-montserrat text-lg font-medium text-[#ECECEC] mb-3 max-[768px]:text-base">
                  Usage Data
                </h3>
                <ul className="space-y-2">
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      Study behavior (e.g., completed sessions, time spent)
                    </span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      Interaction logs (e.g., clicks, navigation paths)
                    </span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>
                      Feedback provided via in-app surveys or thumbs up/down
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat text-lg font-medium text-[#ECECEC] mb-3 max-[768px]:text-base">
                  Device & Technical Data
                </h3>
                <ul className="space-y-2">
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>Browser type, OS, and screen resolution</span>
                  </li>
                  <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                    <span className="text-[#000075] mr-3 mt-1">•</span>
                    <span>IP address and session timestamps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <SectionHeader number="2" title="How We Use Your Information" />
            <div className="ml-11 max-[768px]:ml-0">
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>To deliver personalized study plans and content</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    To adapt the platform to your behavior and improve
                    performance
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    To contact you with progress updates, feedback prompts, or
                    important beta updates
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    For research and product development purposes (aggregated
                    and anonymized)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <SectionHeader number="3" title="Data Sharing" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                We{" "}
                <strong className="text-[#ECECEC]">do not sell or rent</strong>{" "}
                your data. We may share limited information with:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-[#ECECEC]">
                      Service providers
                    </strong>{" "}
                    (such as analytics or hosting tools) only as necessary to
                    operate the platform
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-[#ECECEC]">Contributors</strong>{" "}
                    (aggregated, anonymous insights to help them improve
                    content)
                  </span>
                </li>
              </ul>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                All third parties are bound by strict data protection
                agreements.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <SectionHeader number="4" title="AI-Powered Features" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              Our AI tools (like FOCUS TODAY and Ace Cards) use your behavior
              data to personalize your study experience. No sensitive or
              biometric data is used. Training data is anonymized where
              applicable.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <SectionHeader number="5" title="Cookies & Tracking" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                We use cookies to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Keep you signed in</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Remember your study progress</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Improve user experience</span>
                </li>
              </ul>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                You may disable cookies in your browser, but this may limit
                platform functionality.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <SectionHeader number="6" title="Data Retention" />
            <div className="ml-11 max-[768px]:ml-0">
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    We retain your data for the{" "}
                    <strong className="text-[#ECECEC]">
                      duration of the beta period
                    </strong>{" "}
                    and for up to 6 months afterward unless otherwise requested.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    All user data may be deleted permanently upon request.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    After beta, we will notify users before transitioning to
                    full-service accounts.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <SectionHeader number="7" title="Your Rights" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                You have the right to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Access and review your data</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Request correction or deletion</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Opt out of emails or feedback surveys</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Delete your account entirely</span>
                </li>
              </ul>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                To request any of the above, contact:{" "}
                <Link
                  href="mailto:privacy@acebuddy.so"
                  className="text-[#000075] hover:underline"
                >
                  privacy@acebuddy.so
                </Link>
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <SectionHeader number="8" title="Children's Privacy" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              AceBuddy is not intended for users under{" "}
              <strong className="text-[#ECECEC]">16 years of age</strong>. We do
              not knowingly collect data from minors. If we discover such data,
              we delete it promptly.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <SectionHeader number="9" title="Data Security" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              We use encryption, access controls, and secure hosting
              environments (e.g., Supabase, Vercel) to protect your data.
              However, no system is 100% secure, use AceBuddy responsibly.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <SectionHeader number="10" title="International Users" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              Your data may be processed or stored on servers located outside
              Nigeria (e.g., in the United States or Europe). By using AceBuddy,
              you consent to this international data transfer and processing in
              accordance with applicable data protection laws.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <SectionHeader number="11" title="Changes to This Policy" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              We may revise this policy. When we do, we'll update this page and
              notify you via email or in-app.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <SectionHeader number="12" title="Contact Us" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-4 max-[768px]:text-sm">
                Questions? Concerns? Email us at:
              </p>
              <div className="space-y-2">
                <Link
                  href="mailto:privacy@acebuddy.so"
                  className="block font-inter text-[#000075] hover:underline text-sm"
                >
                  📧 privacy@acebuddy.so
                </Link>
                <Link
                  href="mailto:support@acebuddy.so"
                  className="block font-inter text-[#000075] hover:underline text-sm"
                >
                  📧 support@acebuddy.so
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 max-[768px]:mt-12">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
            <p className="font-inter text-[#909DAC] mb-4 max-[768px]:text-sm">
              Questions about our Privacy Policy?
            </p>
            <Link
              href="mailto:privacy@acebuddy.so"
              className="inline-block font-montserrat border-[1.24px] border-[rgba(255,255,255,0.3)] px-6 py-2 rounded-full text-sm font-normal text-[#F2F4F8] bg-transparent hover:bg-[#000075] hover:font-semibold transition-all duration-300"
            >
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
