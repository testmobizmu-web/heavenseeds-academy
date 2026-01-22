// src/app/[locale]/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

type Locale = "en" | "fr";

export async function generateMetadata(props: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const p = await props.params;
  const locale: Locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const title = isFr
    ? "Conditions Générales — HeavenSeeds Academy"
    : "Terms & Conditions — HeavenSeeds Academy";

  const description = isFr
    ? "Conditions générales d’utilisation, achats, paiements, cours et politique de communication de HeavenSeeds Academy."
    : "Terms and conditions covering use, purchases, payments, courses, and communication policy for HeavenSeeds Academy.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/terms-and-conditions`,
      languages: {
        en: `/en/terms-and-conditions`,
        fr: `/fr/terms-and-conditions`,
      },
    },
    robots: { index: true, follow: true },
  };
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hsa-tc__ico">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hsa-tc__ico">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4a2 2 0 0 0 2 2h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function TermsAndConditionsPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale: Locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const lastUpdated = "2026-01-22"; // update anytime

  const t = {
    title: isFr ? "Conditions Générales" : "Terms & Conditions",
    sub: isFr
      ? "Merci de lire attentivement ces conditions. En utilisant notre site, en demandant un service ou en achetant un cours, vous acceptez ces conditions."
      : "Please read these terms carefully. By using our website, requesting a service, or purchasing a course, you agree to these terms.",
    updated: isFr ? "Dernière mise à jour" : "Last updated",
    backHome: isFr ? "Retour à l’accueil" : "Back to home",
    contact: isFr ? "Contact" : "Contact",
    cardA_h: isFr ? "Résumé (important)" : "Quick summary (important)",
    cardA_p: isFr
      ? "Nous proposons des programmes à Maurice et une académie internationale en ligne. Les achats et inscriptions peuvent être soumis à des conditions spécifiques selon le programme."
      : "We provide Mauritius programs and an international online academy. Purchases and enrollments may have program-specific conditions.",
  };

  const waLink = (text: string) =>
    `https://wa.me/23058204613?text=${encodeURIComponent(text)}`;

  const waText = isFr
    ? "Bonjour 👋 Je souhaite des informations concernant les conditions générales de HeavenSeeds Academy."
    : "Hello 👋 I’d like information regarding HeavenSeeds Academy terms and conditions.";

  return (
    <main className="hsa-tc">
      <style>{`
/* =========================================================
   Terms Page — Premium formatting (scoped)
========================================================= */
.hsa-tc{
  padding: 26px 0 56px;
}
.hsa-tc__wrap{
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 18px;
}
.hsa-tc__hero{
  position: relative;
  border-radius: 26px;
  overflow: hidden;
  padding: clamp(18px, 2.6vw, 28px);
  border: 1px solid rgba(15,23,42,.10);
  background:
    radial-gradient(1100px 420px at 12% 10%, rgba(255,210,230,.55), transparent 60%),
    radial-gradient(1100px 420px at 88% 0%, rgba(210,235,255,.55), transparent 58%),
    radial-gradient(1100px 420px at 15% 105%, rgba(230,255,235,.55), transparent 60%),
    rgba(255,255,255,.86);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 60px rgba(2,6,23,.08);
}
.hsa-tc__kicker{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(140,15,26,.10);
  border: 1px solid rgba(140,15,26,.18);
  color: rgba(11,18,32,.90);
  font-weight: 800;
  letter-spacing: -0.01em;
  font-size: 12.5px;
}
.hsa-tc__h1{
  margin: 12px 0 6px;
  font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: rgba(11,18,32,.96);
  font-weight: 900;
}
.hsa-tc__sub{
  margin: 0;
  max-width: 72ch;
  color: rgba(11,18,32,.72);
  font-size: 15.5px;
  line-height: 1.6;
}
.hsa-tc__meta{
  margin-top: 12px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items:center;
  color: rgba(11,18,32,.62);
  font-size: 13px;
}
.hsa-tc__meta b{ color: rgba(11,18,32,.86); font-weight: 800; }

.hsa-tc__actions{
  margin-top: 14px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}
.hsa-tc__btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 999px;
  text-decoration:none;
  font-weight: 800;
  border: 1px solid rgba(255,255,255,.18);
  background: linear-gradient(180deg, #A31220, #8C0F1A);
  color: #fff;
  box-shadow: 0 16px 45px rgba(2,6,23,.14);
  transition: transform .18s ease, filter .18s ease;
}
.hsa-tc__btn:hover{ transform: translateY(-1px); filter: brightness(1.03); }

.hsa-tc__btnGhost{
  background: rgba(255,255,255,.74);
  color: rgba(11,18,32,.92);
  border: 1px solid rgba(15,23,42,.12);
  box-shadow: 0 12px 34px rgba(2,6,23,.10);
}
.hsa-tc__btnGhost:hover{ filter: none; background: rgba(255,255,255,.84); }

.hsa-tc__grid{
  margin-top: 16px;
  display:grid;
  grid-template-columns: 1.25fr .75fr;
  gap: 14px;
}
@media (max-width: 980px){
  .hsa-tc__grid{ grid-template-columns: 1fr; }
}

.hsa-tc__card{
  background: rgba(255,255,255,.82);
  border: 1px solid rgba(15,23,42,.10);
  border-radius: 22px;
  box-shadow: 0 16px 45px rgba(2,6,23,.08);
  backdrop-filter: blur(10px);
  padding: 16px;
}
.hsa-tc__cardH{
  display:flex;
  align-items:center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(11,18,32,.96);
  margin: 0 0 8px;
}
.hsa-tc__ico{
  width: 18px;
  height: 18px;
  color: #8C0F1A;
}
.hsa-tc__p{
  margin: 0;
  color: rgba(11,18,32,.72);
  font-size: 14px;
  line-height: 1.6;
}

.hsa-tc__toc{
  margin-top: 8px;
  display:flex;
  flex-direction:column;
  gap: 8px;
}
.hsa-tc__toc a{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 8px;
  text-decoration:none;
  color: rgba(11,18,32,.84);
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(15,23,42,.10);
  background: rgba(255,255,255,.74);
  transition: transform .18s ease, background .18s ease;
}
.hsa-tc__toc a:hover{
  transform: translateX(2px);
  background: rgba(140,15,26,.08);
}
.hsa-tc__toc span{
  font-size: 12.5px;
  color: rgba(11,18,32,.52);
  font-weight: 800;
}

.hsa-tc__content{
  margin-top: 14px;
  background: rgba(255,255,255,.82);
  border: 1px solid rgba(15,23,42,.10);
  border-radius: 22px;
  box-shadow: 0 16px 45px rgba(2,6,23,.08);
  backdrop-filter: blur(10px);
  padding: clamp(16px, 2.2vw, 22px);
}

.hsa-tc__section{
  padding: 12px 0;
  border-bottom: 1px solid rgba(15,23,42,.10);
}
.hsa-tc__section:last-child{ border-bottom: 0; }

.hsa-tc__h2{
  margin: 0 0 8px;
  font-size: 18px;
  letter-spacing: -0.02em;
  font-weight: 900;
  color: rgba(11,18,32,.96);
}
.hsa-tc__text{
  margin: 0;
  color: rgba(11,18,32,.72);
  font-size: 14.5px;
  line-height: 1.75;
}
.hsa-tc__list{
  margin: 10px 0 0;
  padding-left: 18px;
  color: rgba(11,18,32,.72);
  font-size: 14.5px;
  line-height: 1.75;
}
.hsa-tc__list li{ margin: 6px 0; }

.hsa-tc__note{
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(140,15,26,.16);
  background: rgba(140,15,26,.06);
  color: rgba(11,18,32,.78);
  font-size: 13.5px;
  line-height: 1.6;
}
      `}</style>

      <div className="hsa-tc__wrap">
        {/* HERO */}
        <section className="hsa-tc__hero">
          <div className="hsa-tc__kicker">
            <IconDoc />
            {t.title}
          </div>

          <h1 className="hsa-tc__h1">{t.title}</h1>
          <p className="hsa-tc__sub">{t.sub}</p>

          <div className="hsa-tc__meta">
            <span>
              {t.updated}: <b>{lastUpdated}</b>
            </span>
            <span aria-hidden="true">•</span>
            <span>
              {isFr ? "Juridiction: Maurice" : "Jurisdiction: Mauritius"}
            </span>
          </div>

          <div className="hsa-tc__actions">
            <Link href={`/${locale}`} className="hsa-tc__btnGhost hsa-tc__btn">
              ← {t.backHome}
            </Link>
            <a href={waLink(waText)} className="hsa-tc__btn" target="_blank" rel="noreferrer">
              {isFr ? "Nous contacter (WhatsApp)" : "Contact us (WhatsApp)"}
            </a>
            <Link href={`/${locale}/contact`} className="hsa-tc__btnGhost hsa-tc__btn">
              {t.contact} →
            </Link>
          </div>
        </section>

        {/* SUMMARY + TOC */}
        <section className="hsa-tc__grid" aria-label="Summary and table of contents">
          <div className="hsa-tc__card">
            <h2 className="hsa-tc__cardH">
              <IconCheck />
              {t.cardA_h}
            </h2>
            <p className="hsa-tc__p">{t.cardA_p}</p>

            <div className="hsa-tc__note">
              {isFr
                ? "Pour toute question, contactez-nous avant l’achat ou l’inscription. Nous répondons rapidement."
                : "If you have any questions, contact us before purchase or enrollment. We respond quickly."}
            </div>
          </div>

          <aside className="hsa-tc__card">
            <h2 className="hsa-tc__cardH">
              <IconDoc />
              {isFr ? "Sommaire" : "Contents"}
            </h2>

            <div className="hsa-tc__toc">
              <a href="#use">
                {isFr ? "Utilisation du site" : "Website use"} <span>01</span>
              </a>
              <a href="#services">
                {isFr ? "Programmes & services" : "Programs & services"} <span>02</span>
              </a>
              <a href="#payments">
                {isFr ? "Paiements & facturation" : "Payments & billing"} <span>03</span>
              </a>
              <a href="#delivery">
                {isFr ? "Accès aux cours & livrables" : "Course access & delivery"} <span>04</span>
              </a>
              <a href="#refunds">
                {isFr ? "Annulation & remboursement" : "Cancellations & refunds"} <span>05</span>
              </a>
              <a href="#conduct">
                {isFr ? "Règles de conduite" : "Code of conduct"} <span>06</span>
              </a>
              <a href="#privacy">
                {isFr ? "Données & confidentialité" : "Data & privacy"} <span>07</span>
              </a>
              <a href="#liability">
                {isFr ? "Responsabilité" : "Liability"} <span>08</span>
              </a>
              <a href="#changes">
                {isFr ? "Modifications" : "Changes"} <span>09</span>
              </a>
              <a href="#contact">
                {isFr ? "Contact" : "Contact"} <span>10</span>
              </a>
            </div>
          </aside>
        </section>

        {/* CONTENT */}
        <section className="hsa-tc__content" aria-label="Terms content">
          {/* 01 */}
          <div id="use" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "1) Utilisation du site" : "1) Website use"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Vous vous engagez à utiliser ce site de manière légale, respectueuse et conforme à ces conditions. Toute tentative d’abus, d’accès non autorisé, de spam ou d’atteinte à la sécurité est interdite."
                : "You agree to use this website lawfully, respectfully, and in accordance with these terms. Any attempt to abuse, gain unauthorized access, spam, or compromise security is prohibited."}
            </p>
          </div>

          {/* 02 */}
          <div id="services" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "2) Programmes & services" : "2) Programs & services"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "HeavenSeeds Academy propose des programmes éducatifs à Maurice (nursery/pré-primaire, inclusion, accompagnement) ainsi qu’une académie en ligne (cours, parcours, contenus et ressources). Les détails (durée, contenu, horaires, accès) peuvent varier selon le programme."
                : "HeavenSeeds Academy provides education programs in Mauritius (nursery/pre-primary, inclusion, support) and an online academy (courses, pathways, content, and resources). Details (duration, content, schedules, access) may vary by program."}
            </p>
            <ul className="hsa-tc__list">
              <li>
                {isFr
                  ? "Les informations affichées sur le site sont données à titre indicatif et peuvent être mises à jour."
                  : "Information on the site is indicative and may be updated."}
              </li>
              <li>
                {isFr
                  ? "Nous pouvons refuser une inscription si cela est nécessaire pour la sécurité, le respect des règles, ou la qualité pédagogique."
                  : "We may refuse enrollment if necessary for safety, rule compliance, or educational quality."}
              </li>
            </ul>
          </div>

          {/* 03 */}
          <div id="payments" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "3) Paiements & facturation" : "3) Payments & billing"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Les prix sont indiqués en roupies mauriciennes (MUR) sauf indication contraire. Les paiements peuvent être requis pour confirmer une inscription, un achat, ou un service. Des frais de transaction peuvent s’appliquer selon le moyen de paiement."
                : "Prices are shown in Mauritian Rupees (MUR) unless stated otherwise. Payment may be required to confirm enrollment, a purchase, or a service. Transaction fees may apply depending on the payment method."}
            </p>
            <ul className="hsa-tc__list">
              <li>
                {isFr
                  ? "Vous êtes responsable de fournir des informations exactes lors du paiement."
                  : "You are responsible for providing accurate payment information."}
              </li>
              <li>
                {isFr
                  ? "Un reçu/facture peut être émis sur demande ou selon le service."
                  : "A receipt/invoice may be issued upon request or depending on the service."}
              </li>
            </ul>
          </div>

          {/* 04 */}
          <div id="delivery" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">
              {isFr ? "4) Accès aux cours & livrables" : "4) Course access & delivery"}
            </h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Pour les cours en ligne, l’accès peut être accordé après confirmation du paiement (ex. accès via compte, lien, email ou plateforme). Pour les services, les livrables et délais dépendent du périmètre convenu."
                : "For online courses, access may be granted after payment confirmation (e.g., via account, link, email, or platform). For services, deliverables and timelines depend on the agreed scope."}
            </p>
            <ul className="hsa-tc__list">
              <li>
                {isFr
                  ? "Vous ne devez pas partager, revendre ou redistribuer les contenus sans autorisation."
                  : "You must not share, resell, or redistribute content without permission."}
              </li>
              <li>
                {isFr
                  ? "Les supports pédagogiques restent protégés par le droit d’auteur."
                  : "Learning materials remain protected by copyright."}
              </li>
            </ul>
          </div>

          {/* 05 */}
          <div id="refunds" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">
              {isFr ? "5) Annulation & remboursement" : "5) Cancellations & refunds"}
            </h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Les politiques d’annulation/remboursement peuvent varier selon le programme (campus, en ligne, services). Lorsque l’accès à un contenu numérique a été accordé, un remboursement peut être limité. Pour toute demande, contactez-nous au plus vite."
                : "Cancellation/refund policies may vary by program (campus, online, services). Once access to digital content has been granted, refunds may be limited. For any request, contact us as soon as possible."}
            </p>

            <div className="hsa-tc__note">
              {isFr
                ? "Nous traitons les cas au mieux, avec une approche humaine et transparente."
                : "We handle cases with a human, transparent approach whenever possible."}
            </div>
          </div>

          {/* 06 */}
          <div id="conduct" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "6) Règles de conduite" : "6) Code of conduct"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Nous attendons un comportement respectueux envers notre équipe, nos élèves et notre communauté. Toute forme de harcèlement, discrimination, contenu offensant ou comportement perturbateur peut entraîner la suspension de l’accès ou l’arrêt du service."
                : "We expect respectful behavior toward our team, learners, and community. Harassment, discrimination, offensive content, or disruptive behavior may result in access suspension or service termination."}
            </p>
          </div>

          {/* 07 */}
          <div id="privacy" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "7) Données & confidentialité" : "7) Data & privacy"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Nous collectons uniquement les informations nécessaires pour répondre à vos demandes, gérer les inscriptions et améliorer l’expérience. Nous ne vendons pas vos données. Pour toute question liée à la confidentialité, contactez-nous."
                : "We only collect information necessary to respond to requests, manage enrollments, and improve the experience. We do not sell your data. For privacy questions, contact us."}
            </p>
            <ul className="hsa-tc__list">
              <li>
                {isFr
                  ? "Vous pouvez demander la correction ou la suppression de certaines données, selon les obligations légales."
                  : "You may request correction or deletion of certain data, subject to legal obligations."}
              </li>
            </ul>
          </div>

          {/* 08 */}
          <div id="liability" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "8) Responsabilité" : "8) Liability"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Nous faisons de notre mieux pour fournir des informations exactes et un service de qualité. Cependant, nous ne garantissons pas l’absence d’erreurs techniques ou d’interruptions. Dans les limites autorisées par la loi, notre responsabilité est limitée au montant payé pour le service concerné."
                : "We do our best to provide accurate information and high-quality services. However, we cannot guarantee the absence of technical errors or interruptions. To the extent allowed by law, our liability is limited to the amount paid for the relevant service."}
            </p>
          </div>

          {/* 09 */}
          <div id="changes" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "9) Modifications" : "9) Changes"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Nous pouvons modifier ces conditions à tout moment pour refléter des mises à jour légales, techniques ou de services. La version publiée sur cette page est la version en vigueur."
                : "We may update these terms at any time to reflect legal, technical, or service changes. The version published on this page is the current version."}
            </p>
          </div>

          {/* 10 */}
          <div id="contact" className="hsa-tc__section">
            <h2 className="hsa-tc__h2">{isFr ? "10) Contact" : "10) Contact"}</h2>
            <p className="hsa-tc__text">
              {isFr
                ? "Pour toute question concernant ces conditions :"
                : "For any questions regarding these terms:"}
            </p>
            <ul className="hsa-tc__list">
              <li>
                {isFr ? "WhatsApp/Téléphone" : "WhatsApp/Phone"}:{" "}
                <a href="tel:+23058204613" style={{ fontWeight: 800, color: "rgba(11,18,32,.88)" }}>
                  +230 5820 4613
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:heavenseedsacademy@gmail.com"
                  style={{ fontWeight: 800, color: "rgba(11,18,32,.88)" }}
                >
                  heavenseedsacademy@gmail.com
                </a>
              </li>
              <li>{isFr ? "Adresse" : "Address"}: Royal Road, Curepipe</li>
            </ul>

            <div className="hsa-tc__actions" style={{ marginTop: 12 }}>
              <a href={waLink(waText)} className="hsa-tc__btn" target="_blank" rel="noreferrer">
                {isFr ? "Écrire sur WhatsApp" : "Message on WhatsApp"}
              </a>
              <Link href={`/${locale}/contact`} className="hsa-tc__btnGhost hsa-tc__btn">
                {isFr ? "Aller à la page contact" : "Go to contact page"} →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
