import React from "react";
import { Category } from "../data";

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
      onClick={() => onClick(category)}
    >
      <h2 className="text-xl font-semibold">{category.display}</h2>
      <p className="text-gray-600">{category.profession.display}</p>
      {category.specialty && (
        <p className="text-gray-600">{category.specialty.display}</p>
      )}
    </div>
  );
};

export default CategoryCard;
