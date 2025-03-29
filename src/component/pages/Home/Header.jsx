import { Link, useNavigate } from "react-router-dom";
import { CutCornerButton } from "./CutCornerButton";

export const Header = ({ user }) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to={"/dashboard"}>
            <div className="font-heading text-4xl font-bold">
              <h2>Flowture</h2>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <CutCornerButton className="hidden md:inline-flex">
              <Link to="/signup">Sign Up</Link> {/* This links to SignUp page */}
            </CutCornerButton>
            <CutCornerButton className="hidden md:inline-flex">
              <Link to="/signin">Sign In</Link> {/* This links to SignIn page */}
            </CutCornerButton>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
