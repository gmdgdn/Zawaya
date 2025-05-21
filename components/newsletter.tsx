import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
          <Mail className="h-6 w-6 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">اشترك في النشرة البريدية</h2>
        <p className="text-muted-foreground mb-6">احصل على أحدث المقالات والبودكاست مباشرة إلى بريدك الإلكتروني</p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="bg-background border-0 focus-visible:ring-yellow-500"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">اشترك الآن</Button>
        </div>
      </div>
    </div>
  )
}
