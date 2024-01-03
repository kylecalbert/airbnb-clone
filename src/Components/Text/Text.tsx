import styled from "styled-components";
import { colors } from "../constants/colors";
///customizable text that can be reused
interface TextProps {
  color?: string;
  size?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}

const StyledText = styled.div<TextProps>`
  color: ${(props) => props.color || colors.textPrimary};
  font-size: ${(props) => props.size || "1.2rem"};
  font-weight: ${(props) => props.fontWeight || "semi-bold"};
`;
export const Text = ({ ...props }) => {
  return <StyledText {...props}></StyledText>;
};
