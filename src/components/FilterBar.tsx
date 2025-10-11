const FilterBar = () => {
    // A real filter bar would use state to manage filter values.
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 bg-white rounded shadow-sm mb-4">
            <div className="mb-2 mb-md-0">
                <select className="form-select form-select-sm" aria-label="Sort by">
                    <option selected>Sort by: Popularity</option>
                    <option value="1">Sort by: Rating</option>
                    <option value="2">Sort by: Name (A-Z)</option>
                </select>
            </div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Filter by type">
                <button type="button" className="btn btn-outline-secondary active">All</button>
                <button type="button" className="btn btn-outline-secondary">Trekking</button>
                <button type="button" className="btn btn-outline-secondary">Coastal</button>
                <button type="button" className="btn btn-outline-secondary">History</button>
            </div>
        </div>
    );
}

export default FilterBar;