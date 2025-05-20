import { type SyntheticEvent } from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

interface Props  {
    onPortfolioDelete: (e:SyntheticEvent) => void
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete,portfolioValue}: Props) => {
  return (
    <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} readOnly={true} />
        <Button><X/></Button>
    </form>
  )
}

export default DeletePortfolio