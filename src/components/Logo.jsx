import logo from '../assets/logos/as3.png'

export default function Logo() {
  return (
    <div className="flex items-baseline gap-1.5 font-extrabold text-[21px]">
      <img src={logo} alt="AS3 Logo" className="h-16 w-auto" />
    </div>
  );
}