import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "about": "About",
        "skills": "Skills",
        "portfolio": "Portfolio",
        "contact": "Contact"
      },
      "hero": {
        "title": "Junior Graphic Designer",
        "tagline": "Crafting Visual Stories with Passion & Precision",
        "cta": "View My Work"
      },
      "about": {
        "title": "About Me",
        "content": "I am Menna Ashraf, a passionate junior graphic designer with around one year of experience in graphic design, branding, and social media design. My work is driven by creativity, a keen eye for detail, and a commitment to strong visual storytelling. I believe that every design should tell a unique story and evoke a meaningful connection."
      },
      "skills": {
        "title": "Skills & Expertise",
        "tools_title": "Tools I Use"
      },
      "portfolio": {
        "title": "Selected Works",
        "view_project": "View Details",
        "concept": "Design Concept",
        "tools": "Tools Used"
      },
      "contact": {
        "title": "Get In Touch",
        "subtitle": "Let's create something beautiful together.",
        "email": "Email",
        "phone": "Phone",
        "behance": "Behance",
        "linkedin": "LinkedIn"
      },
      "projects": {
        "coffee": {
          "title": "Coffee Shop Brand Identity",
          "desc": "A complete visual identity for 'Aura Coffee', focusing on warmth and minimalism.",
          "concept": "The concept revolves around the 'Aura' of a morning coffee, using organic shapes and earthy tones."
        },
        "social": {
          "title": "Social Media Campaign",
          "desc": "A vibrant campaign for a luxury skincare brand.",
          "concept": "Clean layouts with high-end typography to emphasize product purity and elegance."
        },
        "poster": {
          "title": "Creative Poster Design",
          "desc": "An experimental poster series exploring geometric abstraction.",
          "concept": "Using bold colors and overlapping shapes to create a sense of depth and movement."
        },
        "logo": {
          "title": "Modern Logo Design",
          "desc": "Minimalist logo for a tech startup 'Nexus'.",
          "concept": "The logo represents connectivity and growth through interconnected lines."
        },
        "product": {
          "title": "Product Advertisement",
          "desc": "High-impact advertisement for a premium watch collection.",
          "concept": "Dark, moody lighting with gold accents to highlight the luxury aspect of the product."
        },
        "manipulation": {
          "title": "Photo Manipulation Artwork",
          "desc": "A surreal digital art piece titled 'The Floating City'.",
          "concept": "Combining multiple landscapes into a seamless, dreamlike environment."
        }
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "about": "عني",
        "skills": "المهارات",
        "portfolio": "الأعمال",
        "contact": "اتصل بي"
      },
      "hero": {
        "title": "مصممة جرافيك جونيور",
        "tagline": "صياغة القصص البصرية بشغف ودقة",
        "cta": "شاهد أعمالي"
      },
      "about": {
        "title": "من أنا",
        "content": "أنا منة أشرف، مصممة جرافيك طموحة لدي حوالي عام من الخبرة في تصميم الجرافيك، الهوية البصرية، وتصاميم وسائل التواصل الاجتماعي. عملي مدفوع بالإبداع، والاهتمام الدقيق بالتفاصيل، والالتزام بسرد القصص البصرية القوية. أؤمن أن كل تصميم يجب أن يحكي قصة فريدة ويثير اتصالاً ذا معنى."
      },
      "skills": {
        "title": "المهارات والخبرات",
        "tools_title": "الأدوات التي أستخدمها"
      },
      "portfolio": {
        "title": "أعمال مختارة",
        "view_project": "عرض التفاصيل",
        "concept": "مفهوم التصميم",
        "tools": "الأدوات المستخدمة"
      },
      "contact": {
        "title": "تواصل معي",
        "subtitle": "لنصنع شيئاً جميلاً معاً.",
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "behance": "بيهانس",
        "linkedin": "لينكد إن"
      },
      "projects": {
        "coffee": {
          "title": "الهوية البصرية لمقهى",
          "desc": "هوية بصرية كاملة لـ 'Aura Coffee'، تركز على الدفء والبساطة.",
          "concept": "يتمحور المفهوم حول 'هالة' قهوة الصباح، باستخدام أشكال عضوية وألوان ترابية."
        },
        "social": {
          "title": "حملة وسائل التواصل الاجتماعي",
          "desc": "حملة حيوية لعلامة تجارية فاخرة للعناية بالبشرة.",
          "concept": "تخطيطات نظيفة مع طباعة راقية للتأكيد على نقاء المنتج وأناقته."
        },
        "poster": {
          "title": "تصميم بوستر إبداعي",
          "desc": "سلسلة بوسترات تجريبية تستكشف التجريد الهندسي.",
          "concept": "استخدام ألوان جريئة وأشكال متداخلة لخلق شعور بالعمق والحركة."
        },
        "logo": {
          "title": "تصميم شعار حديث",
          "desc": "شعار بسيط لشركة تقنية ناشئة 'Nexus'.",
          "concept": "يمثل الشعار الاتصال والنمو من خلال خطوط مترابطة."
        },
        "product": {
          "title": "إعلان منتج",
          "desc": "إعلان عالي التأثير لمجموعة ساعات فاخرة.",
          "concept": "إضاءة داكنة وغامضة مع لمسات ذهبية لإبراز الجانب الفاخر للمنتج."
        },
        "manipulation": {
          "title": "عمل فني لمعالجة الصور",
          "desc": "قطعة فنية رقمية سريالية بعنوان 'المدينة العائمة'.",
          "concept": "دمج مناظر طبيعية متعددة في بيئة سلسة تشبه الحلم."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
