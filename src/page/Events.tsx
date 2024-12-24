/** @format */
import { Filter, ListOfEvents } from "../component";
const Events = () => {
  return (
    <section className="  md:container mx-auto font-lexend py-6 px-5">
      <div className=" text-2xl font-lexend py-6">Danh sách các sự kiến</div>
      <Filter></Filter>
      <ListOfEvents></ListOfEvents>
    </section>
  );
};
export default Events;
