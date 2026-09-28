import barcode from '../../assets/ui/barcode.svg'
import symbol from '../../assets/ui/symbolWhite.svg'

export default function ContainerBottom() {
  return (
    <div className="flex justify-between items-center pt-2">
      <img src={symbol} alt="UI Symbol" className="h-6 w-auto" />
      <img src={barcode} alt="UI Bar Code" className="h-8 w-auto object-contain" />
    </div>
  )
}
