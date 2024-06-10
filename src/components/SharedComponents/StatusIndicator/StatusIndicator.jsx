import { Indicator } from './StatusIndicator.styled';

export const StatusIndicator = ({ $variant, prop }) => {
  return <Indicator $variant={$variant}>{prop}</Indicator>;
};
