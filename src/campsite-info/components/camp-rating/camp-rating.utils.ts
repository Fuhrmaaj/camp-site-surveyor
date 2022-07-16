import { tooltipLabels } from './camp-rating.constants';

export const getLabelText = (value: number) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${tooltipLabels[value]}`;
};
