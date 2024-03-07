import { MdOutlineClose } from "react-icons/md";
import Rating from "./Rating";
import Category from "./Category";
import PraiseButton from "./PraiseButton";
import Like from "./Like";

const reviewCriteria = [
  {
    heading: "Safety",
    explanation: "How safe did you feel with Trausti?",
  },
  {
    heading: "Communication",
    explanation: "How easy was to communicate with Trausti?",
  },
  {
    heading: "Would you recommend Trausti?",
    explanation: "Your opinion won't be posted publicly.",
  },
  {
    heading: "Praise",
    explanation: "What traits best describe Trausti?",
  },
];

const Review = () => {
  return (
    <div className="z-10 rounded-3xl bg-white overflow-y-auto fixed inset-10 [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col p-4">
        <div className="cursor-pointer">
          <MdOutlineClose size={30} />
        </div>
        <div className="text-3xl font-bold mb-8 mt-2">Leave a review</div>
        <div className="border-b-2 border-dotted pb-3">
          <Category
            heading={reviewCriteria[0].heading}
            explanation={reviewCriteria[0].explanation}
          />
          <Rating />
        </div>
        <div className="border-b-2 border-dotted pb-3">
          <Category
            heading={reviewCriteria[1].heading}
            explanation={reviewCriteria[1].explanation}
          />
          <Rating />
        </div>
        <div className="border-b-2 border-dotted pb-3">
          <Category
            heading={reviewCriteria[2].heading}
            explanation={reviewCriteria[2].explanation}
          />
          <Like />
        </div>
        <div className="border-b-2 border-dotted pb-3">
          <Category
            heading={reviewCriteria[3].heading}
            explanation={reviewCriteria[3].explanation}
          />
          <PraiseButton />
        </div>
      </div>
    </div>
  );
};

export default Review;
