import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy | Where App',
  description: 'How Where App collects, uses, and protects your data.',
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

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">Privacy Policy</h1>
        <p className="text-[#888888] text-sm font-semibold">Last updated: March 7, 2026</p>
      </div>

      <div className="space-y-10">

        <Section title="Our commitment">
          <p>
            Where App is built on a simple principle: your location data belongs to you. We designed the app from the ground up so that your waylines, the records of your trips and experiences, are stored encrypted on your device. We do not collect, transmit, or store your location history on our servers.
          </p>
          <p>
            This Privacy Policy explains what limited data we do collect, how we use it, and your rights around it. If you have questions, email us at <a href="mailto:team@where.app" className="gradient-text font-bold">team@where.app</a>.
          </p>
        </Section>

        <Section title="Information we collect">
          <p><span className="text-[#0c0c0c] dark:text-white font-bold">Email address.</span> If you join the waitlist or sign up for beta access, we collect your email address. We use it only to send you product updates and your invite. We do not use it for advertising.</p>
          <p><span className="text-[#0c0c0c] dark:text-white font-bold">Location data.</span> The Where App records your location to build waylines. This data is stored locally on your device, encrypted. It is not transmitted to our servers unless you explicitly choose to sync or share a wayline.</p>
          <p><span className="text-[#0c0c0c] dark:text-white font-bold">Device information.</span> We may collect basic device information (such as operating system version and app version) to help diagnose issues and improve the app. This is never linked to your location data.</p>
          <p><span className="text-[#0c0c0c] dark:text-white font-bold">Usage data.</span> We may collect anonymized, aggregated information about how the app is used (for example, which features are accessed most) to guide product decisions. This data cannot be used to identify you.</p>
        </Section>

        <Section title="How we use your information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Send you your beta invite and product updates</li>
            <li>Provide and improve the Where App</li>
            <li>Diagnose technical issues</li>
            <li>Understand how the app is used at an aggregate level</li>
          </ul>
          <p>We do not sell your data. We do not use your data for advertising. We do not share your location data with anyone.</p>
        </Section>

        <Section title="Data storage and security">
          <p>
            Your waylines are encrypted on your device using industry-standard encryption. Where App does not have access to your location history. If you delete the app, your waylines are deleted with it.
          </p>
          <p>
            Your email address is stored securely by our email delivery provider (Loops, Inc.). We have a data processing agreement in place with Loops to ensure your data is handled appropriately.
          </p>
        </Section>

        <Section title="Third-party services">
          <p>We use the following third-party services:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><span className="text-[#0c0c0c] dark:text-white font-bold">Loops (loops.so)</span> — email delivery for waitlist and product communications</li>
            <li><span className="text-[#0c0c0c] dark:text-white font-bold">Netlify</span> — website hosting</li>
          </ul>
          <p>We do not use advertising networks, data brokers, or analytics platforms that track individual users across the web.</p>
        </Section>

        <Section title="Your rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Request a copy of any personal data we hold about you</li>
            <li>Request deletion of your email address from our waitlist at any time</li>
            <li>Unsubscribe from product emails at any time via the unsubscribe link in any email</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:team@where.app" className="gradient-text font-bold">team@where.app</a>.</p>
        </Section>

        <Section title="Children's privacy">
          <p>
            Where App is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us at <a href="mailto:team@where.app" className="gradient-text font-bold">team@where.app</a> and we will delete it promptly.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the date at the top of this page. If changes are significant, we will notify waitlist members by email.
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
