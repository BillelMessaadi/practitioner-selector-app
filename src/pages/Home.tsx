import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { categories, Category } from "../data";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    // Call your API here with the selected category
    console.log("Selected Category:", category);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Choisissez un spécialiste</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
