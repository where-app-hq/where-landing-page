import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Terms of Service | Where App',
  description: 'Terms of Service for Where App.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">{title}</h2>
      <div className="text-[#555555] dark:text-[#aaaaaa] text-base leading-relaxed font-medium space-y-3">
        {children}
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <LegalLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">Terms of Service</h1>
        <p className="text-[#888888] text-sm font-semibold">Last updated: March 7, 2026</p>
      </div>

      <div className="space-y-10">

        <Section title="Acceptance of terms">
          <p>
            By accessing or using Where App (the "Service"), including this website and the iOS application, you agree to be bound by these Terms of Service. If you do not agree, do not use the Service. These terms are between you and Where, LLC, an Arizona limited liability company.
          </p>
        </Section>

        <Section title="Description of service">
          <p>
            Where App is a mobile application that records your location during trips and stores that data, as waylines, encrypted on your device. The Service also includes WhereBot, an AI assistant that lets you interact with your waylines via voice or text.
          </p>
          <p>
            Where App is currently available for iPhone only. Features may change, be added, or be removed at any time.
          </p>
        </Section>

        <Section title="Beta program">
          <p>
            The Service is currently in beta. Beta software is provided for testing and feedback purposes. It may contain bugs, errors, or incomplete features. We make no guarantees about uptime, data persistence, or feature availability during the beta period.
          </p>
          <p>
            By joining the beta, you agree to provide honest feedback and accept that the app may change significantly before general release.
          </p>
        </Section>

        <Section title="Your account and data">
          <p>
            Where App does not require an account to use core features. Your waylines are stored on your device. You are responsible for maintaining your device and the data on it.
          </p>
          <p>
            If you choose to create an account or join the waitlist, you are responsible for keeping your credentials secure and for any activity that occurs under your account.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to reverse engineer, decompile, or extract the source code of the app</li>
            <li>Use the Service to collect or store location data about other people without their consent</li>
            <li>Interfere with or disrupt the Service or servers connected to it</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <p>
            Your waylines and the content you create belong to you. You grant Where, LLC a limited license to process that data solely to provide the Service to you.
          </p>
          <p>
            The Where App name, logo, design, and software are owned by Where, LLC. You may not use them without our written permission.
          </p>
        </Section>

        <Section title="Privacy">
          <p>
            Your use of the Service is also governed by our <a href="/privacy" className="gradient-text font-bold">Privacy Policy</a>, which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="Disclaimer of warranties">
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, express or implied. Where, LLC does not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the Service is at your sole risk.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, Where, LLC and its founders, employees, and contractors will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            Our total liability to you for any claim arising out of or relating to these Terms or the Service will not exceed the amount you paid us in the twelve months preceding the claim, or $100, whichever is greater.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These Terms are governed by the laws of the State of Arizona, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved in the state or federal courts located in Maricopa County, Arizona, and you consent to personal jurisdiction in those courts.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these Terms from time to time. When we do, we will update the date at the top of this page. Continued use of the Service after changes constitutes your acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Where, LLC<br />
            Scottsdale, Arizona<br />
            <a href="mailto:team@where.app" className="gradient-text font-bold">team@where.app</a>
          </p>
        </Section>

      </div>
    </LegalLayout>
  )
}
