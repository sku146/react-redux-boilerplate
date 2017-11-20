import appJourneyDev from './appJourney.development.config';
import appJourneyProd from './appJourney.production.config';

export default {
  development: { ...appJourneyDev },
  production: { ...appJourneyProd },
};
