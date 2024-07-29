import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings.length;

  const sales = confirmedStays.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (cabinsCount * numDays);
  return (
    <>
      <Stat
        title="BOOKINGS"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="SALES"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="CHECKINS"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="OCCUPANCY RATE"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupancy * 100)}%`}
      />
    </>
  );
}

export default Stats;
