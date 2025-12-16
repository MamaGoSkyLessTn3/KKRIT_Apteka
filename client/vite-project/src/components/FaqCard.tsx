const FaqCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 p-8 rounded-lg bg-white border border-[#E5E7EB] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] ">
      <span className="text-xl font-bold">{title}</span>
      <p className=" text-text-gray">{description}</p>
    </div>
  );
};

export default FaqCard;
