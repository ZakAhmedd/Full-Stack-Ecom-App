import React from 'react'

const Filters = ({
  selectedCategories,
  selectedTypes,
  onCategoryChange,
  onTypeChange,
}) => {

  const categories = ["Men", "Women", "Kids"];
  const types = ["Topwear", "Bottomwear", "Winterwear"]

  return (
    <div className="flex flex-col w-full max-w-[350px] h-fit justify-start gap-3 xl:gap-5">
        <div className="border border-gray-300 p-5">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-lg mb-2">CATEGORIES</h2>
                {categories.map((category) => (
                    <label key={category} className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => onCategoryChange(category)}
                            className="scale-140 accent-blue-500"
                        />
                        <span className="text-md text-gray-700">{category}</span>
                    </label>
                ))}
            </div>
        </div>

        <div className="border border-gray-300 p-5">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-lg mb-2">TYPE</h2>
                {types.map((type) => (
                    <label key={type} className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => onTypeChange(type)}
                            className="scale-140 accent-blue-500"
                        />
                        <span className="text-md text-gray-700">{type}</span>
                    </label>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Filters
