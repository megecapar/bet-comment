import fiksturService from '../../../services/fikstürler'

// type State = { status: 'loading' } | { status: 'success', data: SunucudanGelecek } | { status: 'failure', error: Error }

const INITIAL_STATE = { status: 'loading' }

export const fetchBundesligaFikstür = () => {
  return async (dispatch) => {
    try {
      const data = await fiksturService.getBundesligaFikstür()
      dispatch({
        type: 'FETCH_BUNDESLIGA_SUCCESS',
        data
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_BUNDESLIGA_FAILURE',
        error
      })
    }
  }
}

const BundesligaFikstürReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BUNDESLIGA_SUCCESS':
      return {
        status: 'success',
        data: action.data
      }
    case 'FETCH_BUNDESLIGA_FAILURE':
      return {
        status: 'failure',
        error: action.error
      }
    default:
      return state
  }
}
export default BundesligaFikstürReducer
