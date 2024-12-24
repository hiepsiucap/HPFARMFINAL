/** @format */
type subscription = {
  id: string;
  name: string;
  customer: string;
  benefit: string;
  img: string;
  amount: number;
  description: string;
};
const Subscription = ({
  onChangeChoose,
  choose,
  id,
  subscription,
}: {
  onChangeChoose: any;
  choose: any;
  id: any;
  subscription: subscription;
}) => {
  return (
    <button
      id="1"
      onClick={() => {
        onChangeChoose({
          id: id,
          name: subscription.name,
          benefit: subscription.benefit,
          img: subscription.img,
          amount: subscription.amount,
        });
      }}
      className={
        id !== choose?.id
          ? "border rounded-lg flex justify-between items-center hover:border  hover:border-green-500  shadow-lg  p-5 text-start"
          : "border rounded-lg flex justify-between items-center hover:border scale-105 border-green-500  shadow-lg  p-5 text-start"
      }
    >
      <div className=" flex flex-col space-y-2 w-2/3 pr-4 ">
        <div className="font-xl">{subscription.name}</div>
        <div className=" font-semibold">{subscription.customer}</div>
        <div className="text-gray-600 text-sm">{subscription.description}</div>
        <div className=" font-bold">Quyền lợi :</div>
        <ul className=" list-disc px-5 text-sm">
          {subscription.benefit.split("-").map((be) => {
            return <li>{be}</li>;
          })}
        </ul>
      </div>
      <div className=" w-1/3">
        <img
          src={subscription.img}
          alt=""
          className=" rounded-md min-h-48"
        />
      </div>
    </button>
  );
};
export default Subscription;
