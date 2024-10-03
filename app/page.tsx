import { Button } from "@/components/ui/button";

export default function Home() {
  return(
    <>
      <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="secondaryOutline">secondary Outline</Button>
        <Button variant="danger">danger</Button>
        <Button variant="dangerOutline">danger Outline</Button>
        <Button variant="premium">premium</Button>
        <Button variant="premiumOutline">premium Outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="sidebar">sidebar</Button>
        <Button variant="sidebarOutline">sidebar Outline</Button>
      </div>
    </>
  )
}
