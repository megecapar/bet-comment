import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import SuperLigFikstürReducer from './reducers/fikstür/SuperLigFikstürReducer'
import PremierLigFikstürReducer from './reducers/fikstür/PremierLigFikstürReducer'
import leagueReducer from './reducers/leagueReducer'
import teamReducer from './reducers/teamReducer'
import { FetchAllFikstür } from './reducers/fikstür/FetchAllFikstür'
import BundesligaFikstürReducer from './reducers/fikstür/BundesLigaFikstürReducer'
import LaLigaFikstürReducer from './reducers/fikstür/LaLigaFikstürReducer'
import LigueOneFikstürReducer from './reducers/fikstür/LigueOneFikstürReducer'
import SuperLigPlayerReducer from './reducers/players/SuperLigPlayersReducer'
import SuperLigPlayedGamesReducer from './reducers/playedgames/SuperLeaguePlayedGamesReducer'

const reducer = combineReducers({
  league: leagueReducer,
  team: teamReducer,
  SuperLigFikstür: SuperLigFikstürReducer,
  PremierLigFikstür: PremierLigFikstürReducer,
  BundesligaFikstür: BundesligaFikstürReducer,
  LaLigaFikstür: LaLigaFikstürReducer,
  LigueOneFikstür: LigueOneFikstürReducer,
  SuperLigPlayers: SuperLigPlayerReducer,
  fetchAllFikstür: FetchAllFikstür,
  SuperLigPlayedGames: SuperLigPlayedGamesReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
