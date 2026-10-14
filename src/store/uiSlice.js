import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobileNavOpen: false,
  noticeView: 'grid',
  activeGalleryTag: 'All',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen
    },
    closeMobileNav(state) {
      state.mobileNavOpen = false
    },
    setNoticeView(state, action) {
      state.noticeView = action.payload
    },
    toggleNoticeView(state) {
      state.noticeView = state.noticeView === 'grid' ? 'list' : 'grid'
    },
    setActiveGalleryTag(state, action) {
      state.activeGalleryTag = action.payload
    },
  },
})

export const {
  toggleMobileNav,
  closeMobileNav,
  setNoticeView,
  toggleNoticeView,
  setActiveGalleryTag,
} = uiSlice.actions

export const selectMobileNavOpen = (state) => state.ui.mobileNavOpen
export const selectNoticeView = (state) => state.ui.noticeView
export const selectActiveGalleryTag = (state) => state.ui.activeGalleryTag

export default uiSlice.reducer
