import { type SyntheticEvent } from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

interface Props  {
    onPortfolioDelete: (e:SyntheticEvent) => void
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete,portfolioValue}: Props) => {
  return (
    <form onSubmit={onPortfolioDelete} className='w-full'>
        <input hidden={true} value={portfolioValue} readOnly={true} />
        <Button className='w-full' variant="destructive"><X className='w-4 h-4 text-red-600'/></Button>
    </form>
  )
}

export default DeletePortfolio