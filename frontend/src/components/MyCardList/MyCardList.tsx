import type { JSX } from "react"
import MyCard from "../MyCard/MyCard"
import { cn } from "@/lib/utils"

interface Props  {
    className?: string
}

const MyCardList: React.FC<Props> = (className: Props): JSX.Element => {
  return (
    <div className={cn("", className)}>
        <MyCard
          companyName="Apple"
          companySymbol="AAPL"
          price={100}
        />
        <MyCard
          companyName="Microsoft"
          companySymbol="MSFT"
          price={120}
        />
        <MyCard
          companyName="Palantir"
          companySymbol="PLTR"
          price={50}
        />
    </div>
  )
}

export default MyCardList