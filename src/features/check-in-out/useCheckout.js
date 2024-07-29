import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isChickingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking # ${data.id} has successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("something went wrong with this check out"),
  });
  return { checkout, isChickingOut };
}

export default useCheckout;
