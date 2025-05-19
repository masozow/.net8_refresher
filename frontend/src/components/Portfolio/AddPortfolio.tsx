import type { SyntheticEvent } from "react"
import { Button } from "../ui/button"

interface Props  {
    onPortfolioCreate: (e:SyntheticEvent) => void,
    symbol: string
}

const AddPortfolio = ({onPortfolioCreate,symbol}: Props) => {
  return (
  <form onSubmit={onPortfolioCreate}>
    <input readOnly={true} hidden={true} value={symbol} />
    <Button type="submit" variant={"secondary"} className="bg-green-600 text-white">Add </Button>
  </form>
  
  )
}

export default AddPortfolio