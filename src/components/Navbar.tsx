import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { HamburgerToggle } from "./icons/HamburgerToggle";
import { Link } from "./Link";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const [menuHidden, setMenuHidden] = useState(true);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (scrollY.get() > 90 && latest >= previous) {
      setHidden(true);
      setMenuHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div>
      <motion.header
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="fixed top-0 z-50 w-full border-b border-my_black-superL bg-my_white"
      >
        <nav className="flex flex-row items-center justify-between px-4 py-[12px] md:py-2">
          <p className="font-black">Company</p>
          <div className="hidden flex-row md:flex">
            <Link href="https://ulovdomov.cz">Gallery</Link>
            <Link>Who are we?</Link>
            <Link>Contact</Link>
          </div>
          <Button variant="outline" className="hidden md:inline">
            Log in
          </Button>
          <HamburgerToggle
            className="md:hidden"
            toggle={() => setMenuHidden((prev) => !prev)}
            state={menuHidden ? "closed" : "open"}
          />
        </nav>
        <motion.div
          variants={{
            open: {
              height: "220px",
            },
            closed: {
              height: "0px",
            },
          }}
          animate={menuHidden ? "closed" : "open"}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="h-52"
        >
          <AnimatePresence mode="popLayout">
            {!menuHidden && (
              <motion.div
                initial={{ opacity: 0, x: "20%" }}
                animate={{ opacity: 1, x: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                exit={{
                  opacity: 0,
                  x: "20%",
                  transition: {
                    duration: 0.1,
                  },
                }}
                className="z-40 flex flex-col items-center px-3 py-5"
              >
                <Button>Log in</Button>
                <Button>Gallery</Button>
                <Button>Who are we?</Button>
                <Button>Contact</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </motion.div>
  );
};
