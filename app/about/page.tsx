import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">من نحن؟</h1>
          <p className="page-description">تعرف على رسالة زوايا ورؤيتها وقيمها</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold mb-6">القصة من كل زواياها</h2>
            <p className="text-lg mb-4">
              في عالم يتسارع فيه تدفق المعلومات، وتتشابك فيه الأحداث والقضايا، تبرز الحاجة إلى منصة إعلامية تتجاوز نقل
              الخبر إلى تحليله وتفكيكه، وتقديم زوايا نظر متعددة تساعد المتلقي على فهم أعمق للواقع.
            </p>
            <p className="text-lg">
              من هذا المنطلق، تأتي "زوايا" كمنصة فكرية تسعى إلى تقديم المحتوى بعمق وشمولية، مع الحرص على التنوع في وجهات
              النظر والمقاربات، إيماناً منا بأن الحقيقة متعددة الأوجه، وأن فهمها يتطلب النظر إليها من زوايا مختلفة.
            </p>
          </div>

          <div className="animate-slide-left">
            <Image
              src="/images/about-illustration.png"
              alt="زوايا - القصة من كل زواياها"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-center">رسالتنا</h2>

          <div className="bg-muted/30 dark:bg-muted/10 p-8 rounded-xl">
            <p className="text-lg mb-4">
              منصة فكرية مستقلة وغير ربحية، تسعى إلى تقديم محتوى معرفي وتحليلي عميق باللغة العربية، يتناول القضايا
              السياسية والاقتصادية والاجتماعية والثقافية المحلية والإقليمية والعالمية.
            </p>
            <p className="text-lg mb-4">
              تقدّم |زوايا| موادًا مكتوبة ومرئية وصوتية متنوعة، تشمل المقالات التحليلية، والبودكاست الحواري، والبرامج
              المتخصصة، والأفلام الوثائقية، بأسلوب مهني وجودة عالية، وبنهج يجمع بين العمق المعرفي والأسلوب المبسط.
            </p>
            <p className="text-lg mb-4">
              تسعى |زوايا| إلى الربط بين المحلي والعالمي، وبين الراهن والتاريخي، وبين النظري والعملي، لتقديم فهم أشمل
              وأعمق للقضايا المطروحة، وتعزيز الوعي النقدي لدى المتلقي العربي.
            </p>
            <p className="text-lg mb-4">
              تنطلق المنصة من إيمان راسخ بقيم الحوار والتعددية والانفتاح، وتلتزم بمبادئ الاستقلالية والمهنية والموضوعية،
              وتحرص على تقديم وجهات نظر متنوعة، وتشجيع النقاش البنّاء حول القضايا المختلفة.
            </p>
            <p className="text-lg mb-4">
              تستهدف المنصة جمهورًا واسعًا من المثقفين والمهتمين والباحثين والطلاب والنشطاء، وكل من يبحث عن محتوى عربي
              رصين يتجاوز السطحية والتنميط، ويقدم رؤى عميقة ومتوازنة.
            </p>
            <p className="text-lg">
              وتطمح |زوايا| إلى التوسّع مستقبلًا لتشمل محتوى باللغة الإنجليزية، بهدف مخاطبة الجمهور العالمي، وتقديم وجهة
              نظر عربية للقضايا العالمية، والمساهمة في بناء جسور معرفية وثقافية بين العالم العربي والعالم.
            </p>
          </div>
        </div>

        <div className="mb-16 animate-slide-up animate-delay-200">
          <h2 className="text-3xl font-bold mb-6 text-center">رؤيتنا</h2>

          <div className="bg-primary/10 p-8 rounded-xl text-center">
            <p className="text-xl italic">
              "نطمح أن نكون المصدر الموثوق والرائد للفهم العميق والتحليل المستنير، وجسرًا للتواصل المعرفي بين الثقافات،
              ومحفزًا للحوار البنّاء الذي يرسم ملامح مستقبل أفضل."
            </p>
          </div>
        </div>

        <div className="mb-16 animate-slide-up animate-delay-300">
          <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">الاستقلالية والنزاهة</h3>
              <p>نلتزم بالاستقلالية الفكرية والمالية، ونقدم المحتوى بنزاهة وموضوعية، بعيدًا عن التحيزات والأجندات.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">العمق المعرفي والتعددية</h3>
              <p>نسعى لتقديم محتوى معرفي عميق، ونؤمن بأهمية تعدد وجهات النظر لفهم أشمل للقضايا المطروحة.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">الحوار والانفتاح</h3>
              <p>نؤمن بقيمة الحوار البنّاء والانفتاح على الآخر، ونسعى لخلق مساحات للنقاش الهادف والمثمر.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">الجودة والابتكار</h3>
              <p>نلتزم بتقديم محتوى عالي الجودة، ونسعى دائمًا للابتكار في الشكل والمضمون.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">ربط المحلي بالعالمي</h3>
              <p>نحرص على تقديم رؤية تربط بين القضايا المحلية والإقليمية والعالمية، وتضعها في سياقها الأشمل.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-primary">المسؤولية المجتمعية</h3>
              <p>ندرك مسؤوليتنا في تقديم محتوى يسهم في تنمية الوعي وتعزيز قيم الحوار والتسامح في المجتمع.</p>
            </div>
          </div>
        </div>

        <div className="text-center animate-slide-up animate-delay-400">
          <h2 className="text-3xl font-bold mb-6">انضم إلينا في رحلتنا</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            نؤمن بأن المعرفة العميقة والحوار البنّاء هما أساس التغيير الإيجابي. انضم إلينا في رحلتنا لبناء منصة معرفية
            عربية رائدة.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/writers-platform">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                منبر الكُتّاب
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
