import Link from "next/link";

const SectionHeader = ({ number, title }) => (
  <h2 className="font-montserrat text-xl font-semibold text-[#ECECEC] mb-4 flex items-center max-[768px]:text-lg">
    <span className="w-8 h-8 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">
      {number}
    </span>
    {title}
  </h2>
);

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header section */}
      <div className="max-w-[900px] mx-auto px-6 pt-20 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="text-center mb-16 max-[768px]:mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-[#000075] to-[#0000A0] rounded-lg mb-6 mx-auto flex items-center justify-center">
            <span className="text-white text-xl">📄</span>
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
            Terms of Service
          </h1>
          <p className="font-inter text-lg text-[#909DAC] max-w-2xl mx-auto max-[768px]:text-base">
            <strong className="text-[#ECECEC]">Effective Date:</strong> 18/06/25
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 max-[768px]:mb-8">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
            <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
              Welcome to AceBuddy! These Terms of Service ("Terms") govern your
              access to and use of our website, platform, products, and services
              (collectively, the "Services"), operated by{" "}
              <strong className="text-[#ECECEC]">
                AceBuddy Technologies Ltd.
              </strong>
              , a private limited company registered in{" "}
              <strong className="text-[#ECECEC]">Lagos, Nigeria</strong>.
            </p>
            <p className="font-inter text-[#909DAC] leading-relaxed mt-4 max-[768px]:text-sm">
              By using AceBuddy, you agree to these Terms. If you do not agree,
              please do not use our Services.
            </p>
          </div>
        </div>

        {/* Terms sections */}
        <div className="space-y-8 max-[768px]:space-y-6">
          {/* Section 1 */}
          <div>
            <SectionHeader number="1" title="Who We Are" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              AceBuddy is an education technology platform that provides
              high-stakes exam takers with personalized learning tools, such as
              AI-generated study plans ("Focus Today") and review aids ("Ace
              Cards"). We operate under{" "}
              <strong className="text-[#ECECEC]">
                AceBuddy Technologies Ltd.
              </strong>
              , a registered company based in Lagos, Nigeria.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <SectionHeader number="2" title="Eligibility" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                By registering for an account, you represent that:
              </p>
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You are at least 16 years old (or the legal age of consent
                    in your jurisdiction)
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You are not barred from using such services under applicable
                    law
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You agree to comply with these Terms and any future updates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <SectionHeader number="3" title="User Accounts" />
            <div className="ml-11 max-[768px]:ml-0">
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You must provide accurate and complete registration
                    information.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You are responsible for maintaining the confidentiality of
                    your account and password.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    You agree not to share your account with others or use
                    another user's account without permission.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <SectionHeader number="4" title="Acceptable Use" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                You agree to use AceBuddy for lawful purposes only. You may not:
              </p>
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>Reverse-engineer or tamper with our systems</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>Upload viruses, malware, or harmful content</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>
                    Copy, redistribute, or commercialize platform content
                    without permission
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>
                    Harass, abuse, or harm other users or contributors
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <SectionHeader number="5" title="Content Ownership" />
            <div className="ml-11 max-[768px]:ml-0">
              <ul className="space-y-3">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    All proprietary content (including FOCUS TODAY sessions, Ace
                    Cards, software, designs, and branding) belongs to{" "}
                    <strong className="text-[#ECECEC]">
                      AceBuddy Technologies Ltd.
                    </strong>
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    Notes and materials contributed by users remain the property
                    of their authors, but by contributing, you grant us a
                    non-exclusive license to host and distribute them under the
                    Contributor Agreement.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    We respect intellectual property rights and operate in
                    compliance with applicable Nigerian IP laws. If you believe
                    your rights have been violated, contact us at{" "}
                    <Link
                      href="mailto:legal@acebuddy.so"
                      className="text-[#000075] hover:underline"
                    >
                      legal@acebuddy.so
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <SectionHeader number="6" title="Beta Disclaimer" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                As part of our{" "}
                <strong className="text-[#ECECEC]">beta testing phase</strong>:
              </p>
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-yellow-400 mr-3 mt-1">⚠</span>
                  <span>
                    Services may be incomplete, contain bugs, or undergo
                    frequent updates
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-yellow-400 mr-3 mt-1">⚠</span>
                  <span>
                    We do not guarantee platform uptime or data permanence
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-yellow-400 mr-3 mt-1">⚠</span>
                  <span>
                    Testers use AceBuddy{" "}
                    <strong className="text-[#ECECEC]">
                      at their own discretion and risk
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <SectionHeader number="7" title="Payments & Access" />
            <div className="ml-11 max-[768px]:ml-0">
              <ul className="space-y-2">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>Our guided learning features are free.</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    Ace Cards may be free or paid depending on the contributor
                    model, but are free during beta.
                  </span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-[#000075] mr-3 mt-1">•</span>
                  <span>
                    All purchases are final unless otherwise stated in writing.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <SectionHeader number="8" title="Termination" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-3 max-[768px]:text-sm">
                We may suspend or terminate your account if:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>You violate these Terms</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>We detect abuse, misuse, or unauthorized access</span>
                </li>
                <li className="font-inter text-[#909DAC] flex items-start max-[768px]:text-sm">
                  <span className="text-red-400 mr-3 mt-1">×</span>
                  <span>
                    Beta access ends and your account does not transition to a
                    full account
                  </span>
                </li>
              </ul>
              <p className="font-inter text-[#909DAC] leading-relaxed max-[768px]:text-sm">
                You may also delete your account by contacting{" "}
                <Link
                  href="mailto:support@acebuddy.so"
                  className="text-[#000075] hover:underline"
                >
                  support@acebuddy.so
                </Link>
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <SectionHeader number="9" title="Changes to These Terms" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              We reserve the right to update these Terms at any time. Changes
              will be communicated via email or platform notice.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <SectionHeader number="10" title="Governing Law" />
            <p className="font-inter text-[#909DAC] leading-relaxed ml-11 max-[768px]:text-sm max-[768px]:ml-0">
              These Terms shall be governed by and construed in accordance with
              the laws of the{" "}
              <strong className="text-[#ECECEC]">
                Federal Republic of Nigeria
              </strong>
              . Any disputes shall fall under the exclusive jurisdiction of the
              courts in <strong className="text-[#ECECEC]">Lagos State</strong>.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <SectionHeader number="11" title="Contact Us" />
            <div className="ml-11 max-[768px]:ml-0">
              <p className="font-inter text-[#909DAC] leading-relaxed mb-4 max-[768px]:text-sm">
                For any questions about these Terms, please contact us:
              </p>
              <div className="space-y-2">
                <Link
                  href="mailto:legal@acebuddy.so"
                  className="block font-inter text-[#000075] hover:underline text-sm"
                >
                  📩 legal@acebuddy.so
                </Link>
                <Link
                  href="mailto:support@acebuddy.so"
                  className="block font-inter text-[#000075] hover:underline text-sm"
                >
                  📩 support@acebuddy.so
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 max-[768px]:mt-12">
          <div className="bg-[rgba(0,0,117,0.05)] border border-[rgba(236,236,236,0.1)] rounded-xl p-6 max-[768px]:p-4">
            <p className="font-inter text-[#909DAC] mb-4 max-[768px]:text-sm">
              Questions about our Terms of Service?
            </p>
            <Link
              href="mailto:legal@acebuddy.so"
              className="inline-block font-montserrat border-[1.24px] border-[rgba(255,255,255,0.3)] px-6 py-2 rounded-full text-sm font-normal text-[#F2F4F8] bg-transparent hover:bg-[#000075] hover:font-semibold transition-all duration-300"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
