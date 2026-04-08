export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-extrabold text-white mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-[#A3A3A3]">
          <section>
            <h2 className="text-xl font-heading font-bold text-white mt-8 mb-3">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg font-heading font-semibold text-white mt-6 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-heading font-semibold text-white mt-6 mb-2">Datenerfassung auf dieser Website</h3>
            <p>
              <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p>
              <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-white mt-8 mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Pascal Sterzik<br />
              Sterzik Solutions<br />
              Uferallee 31<br />
              54492 Zeltingen-Rachtig<br />
              Deutschland<br /><br />
              E-Mail: pascal@sterziksolutions.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-white mt-8 mb-3">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-heading font-semibold text-white mt-6 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-lg font-heading font-semibold text-white mt-6 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-white mt-8 mb-3">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
