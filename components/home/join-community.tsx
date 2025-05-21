import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Users } from "lucide-react"

export default function JoinCommunity() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/10 rounded-xl p-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">انضم إلى مجتمع زوايا</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          كن جزءًا من مجتمع يؤمن بقوة الكلمة وعمق الفكر. اشترك في نشرتنا البريدية أو شارك بأفكارك عبر منبر الكُتّاب.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background dark:bg-muted/20 p-6 rounded-xl">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">النشرة البريدية</h3>
            <p className="text-muted-foreground mb-4">احصل على أحدث المقالات والبودكاست مباشرة إلى بريدك الإلكتروني</p>

            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-muted/50 border-0 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">اشترك الآن</Button>
            </div>
          </div>

          <div className="bg-background dark:bg-muted/20 p-6 rounded-xl">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">منبر الكُتّاب</h3>
            <p className="text-muted-foreground mb-4">
              هل لديك فكرة تستحق أن تُقرأ، أو تحليلًا يضيف زاوية جديدة؟ شارك كتاباتك مع مجتمعنا
            </p>

            <Link href="/writers-platform">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">اعرف المزيد</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
