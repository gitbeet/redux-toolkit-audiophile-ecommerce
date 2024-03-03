import Backdrop from "./Backdrop";
import SuccessfulOrder from "../Pages/SuccessfulOrder";

export default function SuccessfulOrderWindow() {
  return (
    <div>
      <SuccessfulOrder />
      <Backdrop zIndexValue={20} />
    </div>
  );
}
