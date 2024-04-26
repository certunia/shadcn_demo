import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Button } from "@/components/ui/button"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 h-dvh">
        <div className='flex flex-col p-4 border-r'>
          <div className='p-4 border-b'>
            Logo here
          </div>

          <ScrollArea className="h-full w-[150px] p-4">
            <NavigationMenu>
              <NavigationMenuList className='flex flex-col gap-2'>
                <NavigationMenuItem className='w-full'>
                  <Button size='block' asChild variant="ghost" className='text-left items-start'>
                    <Link className='text-left items-start' to="/">Main</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem className='w-full'>
                  <Button size='block' asChild variant="ghost">
                    <Link to="/data-table">Data Table</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ScrollArea>
        </div>
        <div className='content p-4 w-full'>
          <Outlet/>
        </div>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})

