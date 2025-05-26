import { Avatar, Format, AvatarSize} from "@leafygreen-ui/avatar";
import Badge from "@leafygreen-ui/badge";
import Link from "next/link";

export function Header() {
    return (
        <div 
            className="flex items-center justify-center gap-2 border py-4 rounded-t-xl" 
            style={{ 
                backgroundColor: '#e0f2fe',
                background: '#e0f2fe !important'
            }}
        >
            <img src="/V.png" alt="V Sir" className="w-10 h-10 rounded-full" />
            <span className="text-lg font-bold">10X "海豚學習法"</span>
            <Badge variant="blue">Beta</Badge>
        </div>
    )
}

<div className="flex gap-6 justify-center mt-2 mb-4 text-sm">
  <Link href="/about" className="text-blue-600 underline hover:text-blue-800">關於</Link>
  <a href="/10X.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">10X(PDF)下載</a>
  <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">聯絡我們</Link>
</div> 