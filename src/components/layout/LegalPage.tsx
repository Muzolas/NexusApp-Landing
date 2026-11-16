import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

type Section = { title: string; paragraphs?: string[]; items?: string[] };

/** Long-form legal document (privacy policy, terms) read from the Legal namespace. */
export async function LegalPage({ doc }: { doc: "privacy" | "terms" }) {
  const t = await getTranslations("Legal");
  const sections = t.raw(`${doc}.sections`) as Section[];
  const email = siteConfig.links.contactEmail;

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="text-xs font-mono text-muted hover:text-primary transition-colors"
      >
        ← {t("backHome")}
      </Link>

      <header className="mt-8 mb-12 border-b border-surgical pb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
          {t(`${doc}.title`)}
        </h1>
        <p className="mt-3 text-xs font-mono text-muted">
          {t("updatedLabel")}: {t("updated")}
        </p>
        <p className="mt-6 text-[15px] leading-7 text-secondary">{t(`${doc}.intro`)}</p>
      </header>

      <div className="flex flex-col gap-10">
        {sections.map((section, i) => (
          <section key={section.title} aria-labelledby={`${doc}-${i}`}>
            <h2 id={`${doc}-${i}`} className="text-lg font-semibold text-primary">
              {section.title}
            </h2>
            {section.items && (
              <ul className="mt-3 flex flex-col gap-2 list-disc pl-5 marker:text-muted">
                {section.items.map((item) => (
                  <li key={item} className="text-[15px] leading-7 text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-[15px] leading-7 text-secondary">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <footer className="mt-16 border-t border-surgical pt-8 text-sm text-secondary">
        {t("contactLabel")}:{" "}
        <a href={`mailto:${email}`} className="text-accent hover:underline underline-offset-4">
          {email}
        </a>
      </footer>
    </article>
  );
}
