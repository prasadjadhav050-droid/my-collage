import { useDispatch, useSelector } from 'react-redux'
import Icon from './Icon'
import NoticeCard from './NoticeCard'
import { noticeCategories } from '../data/notices'
import {
  resetFilters,
  selectCategoryFilter,
  selectFilteredNotices,
  selectSearchQuery,
  setCategoryFilter,
  setSearchQuery,
} from '../store/noticesSlice'
import { selectNoticeView, toggleNoticeView } from '../store/uiSlice'

export default function NoticeBoard({ limit, showToolbar = true }) {
  const dispatch = useDispatch()
  const notices = useSelector(selectFilteredNotices)
  const searchQuery = useSelector(selectSearchQuery)
  const categoryFilter = useSelector(selectCategoryFilter)
  const view = useSelector(selectNoticeView)

  const visible = typeof limit === 'number' ? notices.slice(0, limit) : notices
  const hasFilters = searchQuery.trim() !== '' || categoryFilter !== 'All'

  return (
    <div className="notice-board">
      {showToolbar && (
        <div className="notice-toolbar">
          <div className="notice-search">
            <Icon name="search" size={18} />
            <input
              type="search"
              value={searchQuery}
              placeholder="Search notices, exams, events..."
              aria-label="Search notices"
              onChange={(event) => dispatch(setSearchQuery(event.target.value))}
            />
            {searchQuery && (
              <button type="button" aria-label="Clear search" onClick={() => dispatch(setSearchQuery(''))}>
                <Icon name="x" size={16} />
              </button>
            )}
          </div>

          <div className="notice-view-toggle" role="group" aria-label="Change layout">
            <button
              type="button"
              className={view === 'grid' ? 'active' : ''}
              aria-label="Grid view"
              onClick={() => view !== 'grid' && dispatch(toggleNoticeView())}
            >
              <Icon name="grid" size={17} />
            </button>
            <button
              type="button"
              className={view === 'list' ? 'active' : ''}
              aria-label="List view"
              onClick={() => view !== 'list' && dispatch(toggleNoticeView())}
            >
              <Icon name="list" size={17} />
            </button>
          </div>
        </div>
      )}

      {showToolbar && (
        <div className="notice-filters">
          {noticeCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`notice-chip ${categoryFilter === category ? 'active' : ''}`}
              onClick={() => dispatch(setCategoryFilter(category))}
            >
              {category}
            </button>
          ))}
          {hasFilters && (
            <button type="button" className="notice-chip notice-chip-reset" onClick={() => dispatch(resetFilters())}>
              <Icon name="refresh-cw" size={14} />
              Reset
            </button>
          )}
        </div>
      )}

      <div className="notice-meta">
        <span>
          Showing <strong>{visible.length}</strong> of <strong>{notices.length}</strong> notices
        </span>
      </div>

      {visible.length === 0 ? (
        <div className="notice-empty">
          <Icon name="search" size={30} />
          <p className="mb-1">No notices matched your search.</p>
          <button type="button" className="btn btn-outline-brand btn-sm" onClick={() => dispatch(resetFilters())}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className={view === 'grid' ? 'row g-3' : 'd-flex flex-column gap-3'}>
          {visible.map((notice) => (
            <div key={notice.id} className={view === 'grid' ? 'col-md-6 col-xl-4' : ''}>
              <NoticeCard notice={notice} view={view} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
