import MobileNavbar from "../MobileNav";
import Header from "../Header";
import WelcomeMessage from "../WelcomeMessage";
import FxRate from "../FxRate";
import Transaction from "../Transaction";
import Graph from "../Graph";
import BalanceMerchant from "../BalanceMerchant";

export default function DashboardComp() {
  return (
    <div className="px-[5vw] pt-[15vh] md:pt-0 pb-[4vh]">
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      <Header />

      <main className=" ">
        <WelcomeMessage />
        <BalanceMerchant />
        <FxRate />

        <div className="recent-money grid grid-cols-1  gap-6 lg:pr-6">
          <Transaction />
          <Graph />
        </div>
      </main>
    </div>
  );
}
