function filters(container = document) {
  const filterList = container.querySelector(".filter");
  const cleanup = [];

  if (filterList) {
    const filterButtons = filterList.querySelectorAll(".filter-btn");
    const filterItems = container.querySelectorAll(".filter-item");

    let filterItemIndex = 0;

    filterItems.forEach((filterItem) => {
      filterItem.style.viewTransitionName = `item-${++filterItemIndex}`;
    });

    const handleClick = (e) => {
      try {
        const target = e.target.closest('[data-filter]');
        if (!target) return;

        const dataFilter = target.getAttribute("data-filter");
        if (!dataFilter) return;

        const selectedFilters = dataFilter.split(',').map(filter => filter.trim());

        if (!document.startViewTransition) {
          updateActiveButton(target);
          filterEvents(selectedFilters);
        } else {
          document.startViewTransition(() => {
            updateActiveButton(target);
            filterEvents(selectedFilters);
          });
        }
      } catch (error) {
        console.error('Error in filter click handler:', error);
      }
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
      cleanup.push(() => button.removeEventListener("click", handleClick));
    });

    function updateActiveButton(newButton) {
      const activeButton = filterList.querySelector(".active");
      if (activeButton) activeButton.classList.remove("active");
      if (newButton) newButton.classList.add("active");
    }

    function filterEvents(filters) {
      filterItems.forEach((filterItem) => {
        const dataFilter = filterItem.getAttribute("data-filter");
        if (!dataFilter) return;

        const dataTypes = dataFilter.split(',').map(type => type.trim());
        const match = filters.includes("*") || filters.some(filter => dataTypes.includes(filter));

        if (match) {
          filterItem.removeAttribute("hidden");
        } else {
          filterItem.setAttribute("hidden", "");
        }
      });
    }
  }

  // Return cleanup function
  return () => cleanup.forEach(fn => fn());
}

export default filters;
