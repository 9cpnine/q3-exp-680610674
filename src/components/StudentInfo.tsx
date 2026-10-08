import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function StudentInfo() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<button className="border border-blue-300 rounded-md px-2 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-white hover:text-white transition-colors duration-200 ease-in-out">
          Nattaphon Chaiwongfun
        </button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student Information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted" >
          <img
            src="../../../public/download.jpg"
            alt="me"
            className="relative h-80 w-full object-cover rounded-t-2xl" 
          />
          <br />
          <div data-slot="card-title" className="font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm">Nattaphon Chaiwongfun</div> <br />
          <div data-slot="card-description" className="text-sm text-muted-foreground">นักศึกษาคณะวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่</div>
          <br /><br />  <br /><br />  <br /> <br />  <br /><br />  <br /> <br/>
          <div data-slot="card-footer" className="flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)">รหัสนักศึกษา: 680610674</div>
          </div>
          
        </div>
          
        
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}