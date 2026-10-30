import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number | null | undefined;
}

const RatingStar = ({ rating }: RatingProps) => {
  const stars = Math.max(0, Math.min(5, Math.floor(rating || 0)));

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar key={star} className={star <= stars ? starcolor(stars) : "text-gray-300"}/>
      ))}
    </div>
  );
};

function starcolor(Scount:number){
  if(Scount == 1) return "text-yellow-900"
  if(Scount > 1 && Scount <= 3) return "text-yellow-700"
  if(Scount >= 4) return "text-yellow-400"
}

export default RatingStar;