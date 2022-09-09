export default function FoodCard(props) {
  return (
    <div className="flex gap-6 max-w-xl">
      <div className="w-80 border-4 rounded-md bd">
        <img
          className="object-cover object-center w-full h-40"
          src={props.img}
          alt="image"
          aria-hidden="true"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between border-b">
          <h4 className="font-bold">{props.title}</h4>
          <span className="text-price font-bold">${props.price}</span>
        </div>
        <p className="text-left mt-4">{props.desc}</p>
      </div>
    </div>
  );
}
