import { Loader } from "lucide-react"


export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="flex mx-auto items-center justify-between h-full lg:max-w-screen-lg">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          {/* <Image src="" height={40} width={40} alt="logo" /> */}
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Babble
          </h1>
        </div>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </div>
    </header>
  )
}
