import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '../../services/MatchesService';

export const actions = createTypes(completeTypes(['GET_MATCHES'], []), '@@MATCHES');

export const targets = { matches: 'matches' };

const actionsCreators = {
  getMatches: () => ({
    type: actions.GET_MATCHES,
    service: MatchesService.getMatches,
    target: targets.matches
  })
};

export default actionsCreators;
