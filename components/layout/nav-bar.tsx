import { nav_links } from "../constants/nav-bar";
import { BrandLogo } from "../icons";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <div className="flex sticky w-full bg-(--background) border-b border-b-(--border)">
      <div className="px-15 py-4.5 flex justify-between items-center max-w-360 w-full gap-10 mx-auto ">
        <BrandLogo />
        <ul className="flex gap-10 items-center">
          {nav_links.map((curr, ind) => {
            return (
              <li
                key={ind}
                className="text-(--muted-foreground) font-semibold text-[16px]"
              >
                <a
                  href={
                    curr.action === "action_open"
                      ? `https://wa.me/${curr.id}?text=Hello%20there!`
                      : curr.id
                  }
                >
                  {curr.lable}
                </a>
              </li>
            );
          })}
          <Button className="h-11.25" variant="outline">
            <a href="mailto:mohamd.27125@gamil.com"> Get A Quote</a>
          </Button>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
