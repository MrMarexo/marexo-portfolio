import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border-b border-my_black-superL bg-my_white px-4 py-2">
      <p className="font-black">Company</p>
      <Button>Log in</Button>
    </nav>
  );
};
