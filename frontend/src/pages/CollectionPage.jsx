import React, { useState, useEffect } from "react";
import sort from "../assets/frontend_assets/sort.png";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import useSearchBarStore from "../stores/SearchBarStore";
import useProductStore from "../stores/ProductStore";

const CollectionPage = () => {

  const [sortOption, setSortOption] = useState("relevant");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const { products, getProducts } = useProductStore();

  const showSearchBar = useSearchBarStore((state) => state.showSearchBar);
  const searchTerm = useSearchBarStore((state) => state.searchTerm);
  const setSearchTerm = useSearchBarStore((state) => state.setSearchTerm);
  const closeSearchBar = useSearchBarStore((state) => state.closeSearchBar);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredProducts = products.filter((product) => {
    
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.subCategory);

    const searchMatch =
      searchTerm.trim() === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && typeMatch && searchMatch;
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return 0; // relevant
  });

   useEffect(() => {
      getProducts();
    }, [getProducts]);

  return (

    <div className="min-h-screen flex flex-col mx-7 xl:mx-27 mt-5">

        {/* Conditionally show Search Bar */}
        {showSearchBar && (
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClose={closeSearchBar} />
        )}

      <div className="flex flex-col xl:flex-row justify-between items-center">
        <h2 className="hidden xl:flex text-2xl font-medium">FILTERS</h2>
        <div className="flex ml-15 justify-center items-center font-medium gap-2 text-3xl xl:font-semibold tracking-wide">
          <span className="text-gray-500">ALL </span>
          <span className="text-gray-800">COLLECTIONS</span>
          <span className="w-12 xl:w-16 h-[2.5px] bg-black"></span>
        </div>
        <div className="flex justify-between items-center mt-20 xl:mt-0 w-full xl:w-auto">
          {/* Mobile Menu Button */}
            <button
                className="xl:hidden text-sm font-medium bg-gray-100 border border-gray-300 px-2 py-1 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <h2 className="text-blue-700">CLOSE</h2> : <h2>FILTERS</h2>}
            </button>
          <div className="relative inline-block">
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-1 xl:pl-2 pr-10 py-2 xl:py-3 text-gray-800 text-xs xl:text-sm font-semibold focus:outline-blue-500 focus:ring-2 focus:ring-black shadow-xs shadow-gray-800 cursor-pointer"
            >
              <option value="relevant">Relevance</option>
              <option value="price-low-high">Price: Low-High</option>
              <option value="price-high-low">Price: High-Low</option>
            </select>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              <img src={sort} alt="sort" className="w-4 xl:w-5 h-auto" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 xl:mt-15">

        <div className="hidden xl:flex flex-col w-full max-w-[290px] h-fit justify-start gap-5">
          <Filters 
            selectedCategories={selectedCategories}
            selectedTypes={selectedTypes}
            onCategoryChange={handleCategoryChange}
            onTypeChange={handleTypeChange}
          />
        </div>

        <div className="flex xl:hidden flex-col w-full max-w-[290px] h-fit justify-start gap-5">
          {isOpen && 
          <Filters 
            selectedCategories={selectedCategories}
            selectedTypes={selectedTypes}
            onCategoryChange={handleCategoryChange}
            onTypeChange={handleTypeChange}
          />}
        </div>
        
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 -mt-4 -mr-4">
          {sortedProducts.map((product) => (
            <ProductCard product={product} key={product._id}  />
          ))}
        </div>
      </div>

    </div>
  )
}

export default CollectionPage