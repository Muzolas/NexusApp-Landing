// Source for the privacy policy and terms of service copy. Running this file
// writes the "Legal" namespace into messages/en.json and messages/tr.json.
//
//   node scripts/legal-content.mjs
//
// Keep the facts here in line with what the app really does (see the app
// repo: backend/internal/auth, workspace_secrets, mailer, billing, llm).

import { readFileSync, writeFileSync } from "node:fs";

const UPDATED = { en: "16 November 2026", tr: "16 Kasım 2026" };

const en = {
  updatedLabel: "Last updated",
  updated: UPDATED.en,
  contactLabel: "Questions",
  backHome: "Back to home",
  privacy: {
    title: "Privacy Policy",
    description: "What Orkhon collects, why, who processes it and how to delete it.",
    intro:
      "This policy explains what personal data Orkhon collects, why we collect it and what you can do about it. It covers the website at orkhon.beishang.dev and the app at app.orkhon.beishang.dev.",
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "Orkhon is built and operated by beishang.dev, an independent developer based in Turkey. We are the data controller for the data described here. You can reach us at contact@beishang.dev.",
        ],
      },
      {
        title: "What we collect",
        items: [
          "Account details: your email address, name and preferred language. Passwords are stored only as an Argon2id hash, never in plain text.",
          "Google or GitHub sign-in: if you choose it, we receive your name, email address, profile picture and the account ID from that provider. We do not get your Google or GitHub password.",
          "Sessions: for each signed-in device we keep the IP address, browser user agent and device name, so we can protect your account and show you where you are signed in.",
          "Connected services: the access tokens and API keys you add (for example Vercel, Coolify, GitHub, Stripe, Supabase or a database). They are encrypted with AES-256-GCM, never shown back in plain text and never written to logs.",
          "Workspace data: what Orkhon reads from those services on your behalf (deployments, CI runs, revenue figures, logs, database metadata) and what you enter yourself (expenses, notes, settings).",
          "Website forms: the email address and message you send through the contact or early access form. They are delivered to us by email.",
          "Billing: if you buy a paid plan, Stripe processes the payment. We receive your plan, payment status and limited billing details, never your full card number.",
        ],
      },
      {
        title: "How we use it",
        items: [
          "To run Orkhon and show you the data you asked it to monitor.",
          "To keep accounts secure, for example by detecting unusual sign-ins and limiting repeated login attempts.",
          "To send service emails: email verification, password reset, invitations and billing notices.",
          "To answer your messages and support requests.",
        ],
        paragraphs: [
          "We do not sell your data, show ads or use third-party advertising trackers.",
        ],
      },
      {
        title: "AI features",
        paragraphs: [
          "When you use the AI assistant, your question and the workspace context it needs are sent to an AI provider: Google Gemini by default, or the provider whose key you added (OpenAI, Anthropic or DeepSeek). This happens only when you use the assistant. Those providers process the data under their own terms.",
        ],
      },
      {
        title: "Who processes data for us",
        items: [
          "Hostinger: the server that runs the Orkhon app, API and database.",
          "Vercel: hosting for this website.",
          "Resend: delivery of service emails and website form messages.",
          "Stripe: payments for paid plans.",
          "Google and GitHub: sign-in, only if you choose them.",
          "The AI providers listed above, only when you use the assistant.",
        ],
        paragraphs: [
          "Some of these providers process data outside Turkey. We use them only to run the service, and they may not use your data for their own purposes.",
        ],
      },
      {
        title: "Cookies and browser storage",
        paragraphs: [
          "This website remembers your theme and language. The app keeps your sign-in tokens in your browser so you stay signed in. We do not use analytics or advertising cookies.",
        ],
      },
      {
        title: "How long we keep it",
        paragraphs: [
          "We keep account and workspace data while your account is active. When you ask us to delete your account, we delete it and your workspace data within 30 days, except records the law requires us to keep, such as invoices. Website form messages are kept only as long as we need them to reply.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Under the Turkish Personal Data Protection Law (KVKK, No. 6698), and the GDPR where it applies, you can ask to see, correct, export or delete your data, and you can object to how we use it. Email contact@beishang.dev and we will reply within 30 days. You can also complain to the Personal Data Protection Authority (KVKK) or your local data protection authority.",
        ],
      },
      {
        title: "Security",
        paragraphs: [
          "All traffic uses TLS. Secrets are encrypted, passwords are hashed and each workspace's data is kept separate. No system is perfectly secure; if a breach affects your data, we will tell you as the law requires.",
        ],
      },
      {
        title: "Children",
        paragraphs: ["Orkhon is not meant for anyone under 16, and we do not knowingly collect their data."],
      },
      {
        title: "Changes",
        paragraphs: [
          "When this policy changes, we update the date at the top. For significant changes we also email account holders before they take effect.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "The rules for using Orkhon.",
    intro:
      "These terms apply when you use Orkhon, the website at orkhon.beishang.dev and the app at app.orkhon.beishang.dev, operated by beishang.dev. By creating an account or using Orkhon you agree to them.",
    sections: [
      {
        title: "Early access",
        paragraphs: [
          "Orkhon is in early access. Features may change, be limited or be unavailable at times, and we do not guarantee a specific uptime yet.",
        ],
      },
      {
        title: "Your account",
        items: [
          "You must be at least 16 years old.",
          "Give accurate information and keep your sign-in details safe.",
          "You are responsible for what happens under your account. Tell us at once if you think someone else has access to it.",
        ],
      },
      {
        title: "Your data and connected services",
        paragraphs: [
          "Your data stays yours. When you connect a service, you allow Orkhon to access it only to provide the features you use. Connect only services and accounts you have the right to use. You can disconnect a service at any time.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: ["Do not use Orkhon to:"],
        items: [
          "break the law or the terms of a service you connect;",
          "probe, scan or attack systems you do not own or have permission to test;",
          "get around plan limits, security controls or access restrictions;",
          "put unreasonable load on the service or interfere with other users;",
          "resell or redistribute the service without our written permission.",
        ],
      },
      {
        title: "Plans and payment",
        paragraphs: [
          "Paid plans are billed in advance for each billing period through Stripe. You can cancel at any time; the plan stays active until the end of the paid period. We will tell you before a price change takes effect. Refunds follow the law that applies to you.",
        ],
      },
      {
        title: "AI assistant",
        paragraphs: [
          "AI answers can be wrong or incomplete. Check them before you act on them, especially before deployments, database changes or anything you cannot undo. You are responsible for the actions you take.",
        ],
      },
      {
        title: "No warranty",
        paragraphs: [
          "Orkhon is provided as is. To the extent the law allows, we make no promises that it will be uninterrupted, error-free or fit for a particular purpose.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "To the extent the law allows, we are not liable for indirect or consequential losses such as lost profits or lost data. Our total liability is limited to the amount you paid us in the 12 months before the claim. Nothing in these terms limits rights you have as a consumer that cannot be limited by contract.",
        ],
      },
      {
        title: "Ending your use",
        paragraphs: [
          "You can stop using Orkhon and ask us to delete your account at any time. We may suspend or close an account that breaks these terms; where possible we will tell you first and explain why.",
        ],
      },
      {
        title: "Changes to these terms",
        paragraphs: [
          "We may update these terms. For significant changes we will email account holders before they take effect. If you keep using Orkhon after that, the new terms apply.",
        ],
      },
      {
        title: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Republic of Turkey, and the courts of Turkey have jurisdiction, without affecting any mandatory consumer protection rules of your country.",
        ],
      },
    ],
  },
};

const tr = {
  updatedLabel: "Son güncelleme",
  updated: UPDATED.tr,
  contactLabel: "Sorular",
  backHome: "Ana sayfaya dön",
  privacy: {
    title: "Gizlilik Politikası",
    description: "Orkhon hangi verileri, neden topluyor; kim işliyor ve nasıl silinir.",
    intro:
      "Bu politika, Orkhon'un hangi kişisel verileri topladığını, bunları neden topladığını ve senin hangi haklara sahip olduğunu açıklar. orkhon.beishang.dev web sitesini ve app.orkhon.beishang.dev uygulamasını kapsar.",
    sections: [
      {
        title: "Biz kimiz",
        paragraphs: [
          "Orkhon, Türkiye'de yaşayan bağımsız bir geliştirici olan beishang.dev tarafından geliştirilir ve işletilir. Burada anlatılan veriler için veri sorumlusu biziz. Bize contact@beishang.dev adresinden ulaşabilirsin.",
        ],
      },
      {
        title: "Hangi verileri topluyoruz",
        items: [
          "Hesap bilgileri: e-posta adresin, adın ve dil tercihin. Şifren yalnızca Argon2id ile hash'lenmiş olarak saklanır, hiçbir zaman düz metin olarak tutulmaz.",
          "Google veya GitHub ile giriş: bu yolu seçersen o servisten adını, e-posta adresini, profil fotoğrafını ve hesap kimliğini alırız. Google veya GitHub şifreni almayız.",
          "Oturumlar: giriş yapılan her cihaz için IP adresini, tarayıcı bilgisini (user agent) ve cihaz adını tutarız. Böylece hesabını korur ve nerelerde oturum açık olduğunu sana gösteririz.",
          "Bağlanan servisler: eklediğin erişim token'ları ve API anahtarları (örneğin Vercel, Coolify, GitHub, Stripe, Supabase veya bir veritabanı). Bunlar AES-256-GCM ile şifrelenir, sana bir daha düz metin olarak gösterilmez ve loglara yazılmaz.",
          "Çalışma alanı verileri: Orkhon'un senin adına bu servislerden okuduğu veriler (deploy'lar, CI çalışmaları, gelir rakamları, loglar, veritabanı bilgileri) ve senin girdiğin bilgiler (giderler, notlar, ayarlar).",
          "Web sitesi formları: iletişim veya erken erişim formuyla gönderdiğin e-posta adresi ve mesaj. Bunlar bize e-posta olarak ulaşır.",
          "Ödeme: ücretli bir plan alırsan ödemeyi Stripe işler. Biz planını, ödeme durumunu ve sınırlı fatura bilgilerini görürüz; kart numaranın tamamını hiçbir zaman almayız.",
        ],
      },
      {
        title: "Verileri ne için kullanıyoruz",
        items: [
          "Orkhon'u çalıştırmak ve izlemesini istediğin verileri sana göstermek için.",
          "Hesapları güvende tutmak için; örneğin olağandışı girişleri fark etmek ve art arda yapılan giriş denemelerini sınırlamak.",
          "Hizmet e-postaları göndermek için: e-posta doğrulama, şifre sıfırlama, davetler ve ödeme bildirimleri.",
          "Mesajlarına ve destek isteklerine cevap vermek için.",
        ],
        paragraphs: [
          "Verilerini satmayız, reklam göstermeyiz ve üçüncü taraf reklam takipçileri kullanmayız.",
        ],
      },
      {
        title: "Yapay zekâ özellikleri",
        paragraphs: [
          "AI asistanını kullandığında sorun ve gereken çalışma alanı bağlamı bir yapay zekâ sağlayıcısına gönderilir: varsayılan olarak Google Gemini'ye ya da anahtarını eklediğin sağlayıcıya (OpenAI, Anthropic veya DeepSeek). Bu yalnızca asistanı kullandığında olur. Bu sağlayıcılar veriyi kendi koşullarına göre işler.",
        ],
      },
      {
        title: "Verileri bizim için kimler işliyor",
        items: [
          "Hostinger: Orkhon uygulamasını, API'yi ve veritabanını çalıştıran sunucu.",
          "Vercel: bu web sitesinin barındırılması.",
          "Resend: hizmet e-postalarının ve web sitesi form mesajlarının iletilmesi.",
          "Stripe: ücretli planların ödemeleri.",
          "Google ve GitHub: giriş, yalnızca bu yolu seçersen.",
          "Yukarıda sayılan yapay zekâ sağlayıcıları, yalnızca asistanı kullandığında.",
        ],
        paragraphs: [
          "Bu sağlayıcıların bir kısmı verileri Türkiye dışında işler. Onları yalnızca hizmeti çalıştırmak için kullanırız; verilerini kendi amaçları için kullanamazlar.",
        ],
      },
      {
        title: "Çerezler ve tarayıcı depolaması",
        paragraphs: [
          "Bu web sitesi tema ve dil seçimini hatırlar. Uygulama, oturumun açık kalsın diye giriş token'larını tarayıcında saklar. Analiz veya reklam çerezi kullanmayız.",
        ],
      },
      {
        title: "Verileri ne kadar saklıyoruz",
        paragraphs: [
          "Hesap ve çalışma alanı verilerini hesabın açık olduğu sürece saklarız. Hesabının silinmesini istediğinde hesabını ve çalışma alanı verilerini 30 gün içinde sileriz; faturalar gibi yasal olarak saklamamız gereken kayıtlar hariç. Web sitesi form mesajlarını yalnızca cevap vermek için gerektiği kadar tutarız.",
        ],
      },
      {
        title: "Hakların",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve geçerli olduğu durumlarda GDPR kapsamında verilerini görmeyi, düzeltilmesini, dışa aktarılmasını veya silinmesini isteyebilir; işlenmesine itiraz edebilirsin. contact@beishang.dev adresine yaz, 30 gün içinde cevap veririz. Ayrıca Kişisel Verileri Koruma Kurumu'na şikâyette bulunabilirsin.",
        ],
      },
      {
        title: "Güvenlik",
        paragraphs: [
          "Tüm trafik TLS ile şifrelenir. Gizli anahtarlar şifreli, şifreler hash'lenmiş olarak tutulur ve her çalışma alanının verisi diğerlerinden ayrıdır. Hiçbir sistem kusursuz değildir; verilerini etkileyen bir ihlal olursa yasanın gerektirdiği şekilde sana haber veririz.",
        ],
      },
      {
        title: "Çocuklar",
        paragraphs: ["Orkhon 16 yaşından küçükler için değildir ve bilerek onların verisini toplamayız."],
      },
      {
        title: "Değişiklikler",
        paragraphs: [
          "Bu politika değiştiğinde en üstteki tarihi güncelleriz. Önemli değişikliklerde, yürürlüğe girmeden önce hesap sahiplerine e-posta da göndeririz.",
        ],
      },
    ],
  },
  terms: {
    title: "Kullanım Koşulları",
    description: "Orkhon'u kullanma kuralları.",
    intro:
      "Bu koşullar, beishang.dev tarafından işletilen Orkhon'u, yani orkhon.beishang.dev web sitesini ve app.orkhon.beishang.dev uygulamasını kullandığında geçerlidir. Hesap oluşturarak veya Orkhon'u kullanarak bu koşulları kabul etmiş olursun.",
    sections: [
      {
        title: "Erken erişim",
        paragraphs: [
          "Orkhon erken erişim aşamasındadır. Özellikler değişebilir, sınırlı olabilir veya zaman zaman kullanılamayabilir; şimdilik belirli bir çalışma süresi garantisi vermiyoruz.",
        ],
      },
      {
        title: "Hesabın",
        items: [
          "En az 16 yaşında olmalısın.",
          "Doğru bilgi vermeli ve giriş bilgilerini güvende tutmalısın.",
          "Hesabında olan her şeyden sen sorumlusun. Başka birinin hesabına eriştiğini düşünürsen bize hemen haber ver.",
        ],
      },
      {
        title: "Verilerin ve bağlanan servisler",
        paragraphs: [
          "Verilerin sana aittir. Bir servisi bağladığında Orkhon'un ona yalnızca kullandığın özellikleri sağlamak için erişmesine izin vermiş olursun. Yalnızca kullanma hakkın olan servisleri ve hesapları bağla. Bir servisin bağlantısını istediğin zaman kesebilirsin.",
        ],
      },
      {
        title: "Kabul edilebilir kullanım",
        paragraphs: ["Orkhon'u şunlar için kullanma:"],
        items: [
          "yasaları veya bağladığın bir servisin koşullarını çiğnemek;",
          "sahibi olmadığın ya da test etme izni almadığın sistemleri taramak, yoklamak veya onlara saldırmak;",
          "plan sınırlarını, güvenlik kontrollerini veya erişim kısıtlarını aşmaya çalışmak;",
          "hizmete makul olmayan yük bindirmek veya diğer kullanıcıları engellemek;",
          "yazılı iznimiz olmadan hizmeti yeniden satmak veya dağıtmak.",
        ],
      },
      {
        title: "Planlar ve ödeme",
        paragraphs: [
          "Ücretli planlar her dönem için peşin olarak Stripe üzerinden faturalanır. İstediğin zaman iptal edebilirsin; plan, ödenen dönemin sonuna kadar açık kalır. Bir fiyat değişikliğini yürürlüğe girmeden önce sana bildiririz. İadeler, sana uygulanan yasalara göre yapılır.",
        ],
      },
      {
        title: "AI asistanı",
        paragraphs: [
          "AI cevapları yanlış veya eksik olabilir. Özellikle deploy, veritabanı değişikliği ya da geri alınamayacak bir işlem yapmadan önce cevabı kontrol et. Yaptığın işlemlerden sen sorumlusun.",
        ],
      },
      {
        title: "Garanti verilmemesi",
        paragraphs: [
          "Orkhon olduğu gibi sunulur. Yasaların izin verdiği ölçüde, kesintisiz, hatasız veya belirli bir amaca uygun olacağına dair söz vermiyoruz.",
        ],
      },
      {
        title: "Sorumluluğun sınırı",
        paragraphs: [
          "Yasaların izin verdiği ölçüde kâr kaybı veya veri kaybı gibi dolaylı zararlardan sorumlu değiliz. Toplam sorumluluğumuz, talepten önceki 12 ayda bize ödediğin tutarla sınırlıdır. Bu koşullardaki hiçbir şey, sözleşmeyle sınırlandırılamayan tüketici haklarını kısıtlamaz.",
        ],
      },
      {
        title: "Kullanımın sona ermesi",
        paragraphs: [
          "Orkhon'u kullanmayı istediğin zaman bırakabilir ve hesabının silinmesini isteyebilirsin. Bu koşulları çiğneyen bir hesabı askıya alabilir veya kapatabiliriz; mümkünse önce sana haber verir ve nedenini açıklarız.",
        ],
      },
      {
        title: "Koşullardaki değişiklikler",
        paragraphs: [
          "Bu koşulları güncelleyebiliriz. Önemli değişikliklerde, yürürlüğe girmeden önce hesap sahiplerine e-posta göndeririz. Bundan sonra Orkhon'u kullanmaya devam edersen yeni koşullar geçerli olur.",
        ],
      },
      {
        title: "Uygulanacak hukuk",
        paragraphs: [
          "Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir ve Türkiye mahkemeleri yetkilidir. Bu, ülkendeki zorunlu tüketici koruma kurallarını etkilemez.",
        ],
      },
    ],
  },
};

for (const [locale, legal] of [
  ["en", en],
  ["tr", tr],
]) {
  const path = new URL(`../messages/${locale}.json`, import.meta.url);
  const messages = JSON.parse(readFileSync(path, "utf8"));
  messages.Legal = legal;
  writeFileSync(path, JSON.stringify(messages, null, 2) + "\n");
}
console.log("Legal copy written to messages/en.json and messages/tr.json");
