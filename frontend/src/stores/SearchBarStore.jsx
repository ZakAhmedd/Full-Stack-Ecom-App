import { create } from "zustand";

const useSearchBarStore = create((set) => ({
  showSearchBar: false,
  searchTerm: "",

  openSearchBar: () => set({ showSearchBar: true }),
  closeSearchBar: () => set({ showSearchBar: false }),
  toggleSearchBar: () =>
    set((state) => ({ showSearchBar: !state.showSearchBar })),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useSearchBarStore;
