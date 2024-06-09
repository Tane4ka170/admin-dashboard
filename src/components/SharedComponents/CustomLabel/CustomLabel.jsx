import { Label } from './CustomLabel.styled';

export const CustomLabel = ({ $variant, prop }) => {
  return <Label $variant={$variant}>{prop}</Label>;
};
