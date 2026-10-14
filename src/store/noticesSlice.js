import { createSlice } from '@reduxjs/toolkit'
import { notices as seedNotices } from '../data/notices'

const initialState = {
  items: seedNotices,
  searchQuery: '',
  categoryFilter: 'All',
}

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload
    },
    resetFilters(state) {
      state.searchQuery = ''
      state.categoryFilter = 'All'
    },
    addNotice(state, action) {
      state.items.unshift(action.payload)
    },
  },
})

export const { setSearchQuery, setCategoryFilter, resetFilters, addNotice } =
  noticesSlice.actions

export const selectAllNotices = (state) => state.notices.items
export const selectSearchQuery = (state) => state.notices.searchQuery
export const selectCategoryFilter = (state) => state.notices.categoryFilter

export const selectFilteredNotices = (state) => {
  const { items, searchQuery, categoryFilter } = state.notices
  const query = searchQuery.trim().toLowerCase()
  return items.filter((notice) => {
    const matchesCategory =
      categoryFilter === 'All' || notice.category === categoryFilter
    const matchesQuery =
      !query ||
      notice.title.toLowerCase().includes(query) ||
      notice.body.toLowerCase().includes(query) ||
      notice.category.toLowerCase().includes(query)
    return matchesCategory && matchesQuery
  })
}

export default noticesSlice.reducer
