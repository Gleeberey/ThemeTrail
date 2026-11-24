function RouteFilters({
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
}) {
  return (
    <div className="route-filters">
      <div className="route-filter-field">
        <label htmlFor="routeSearch">Поиск маршрута</label>

        <input
          id="routeSearch"
          type="search"
          value={searchQuery}
          placeholder="Например, архитектура"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="route-filter-field">
        <label htmlFor="routeSort">Сортировка</label>

        <select
          id="routeSort"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">По умолчанию</option>
          <option value="title-asc">Название A–Z</option>
          <option value="title-desc">Название Z–A</option>
        </select>
      </div>
    </div>
  )
}

export default RouteFilters
