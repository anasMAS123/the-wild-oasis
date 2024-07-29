import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleteing, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: (data) => {
      toast.success("the booking is successfully deleted ");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => {
      toast.error("something went wrong with deleting this booking");
      console.log(err.message);
    },
  });
  return { deleteBooking, isDeleteing };
}

export default useDeleteBooking;
