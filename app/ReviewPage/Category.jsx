const Category = ({ heading, explanation }) => {
  return (
    <div className="pt-5">
      <div className="text-xl font-semibold">{heading}</div>
      <div className="text-xs text-gray-400 my-1">{explanation}</div>
    </div>
  );
};

export default Category;
