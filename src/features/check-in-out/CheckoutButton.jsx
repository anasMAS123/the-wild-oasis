import Button from "../../ui/Button";
import useCheckOut from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
