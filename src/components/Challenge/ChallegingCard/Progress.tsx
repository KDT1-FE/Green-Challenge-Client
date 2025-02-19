import color from 'color';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import Current from './Current';

interface ProgressProps {
  progress: number;
  target: string;
  currentDistance: string;
}

function Progress({progress, target, currentDistance}: ProgressProps) {
  return (
    <Wrapper>
      <Current position={progress}>{currentDistance}</Current>
      <LeafContainer>
        <Leaf name="leaf" />
      </LeafContainer>
      <Background>
        <Percent progress={progress}></Percent>
      </Background>
      <TargetSpan>{target}</TargetSpan>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 44px;
  position: relative;
`;
const Background = styled.div`
  width: 100%;
  height: 12px;
  background-color: #ebedf0;
  border-radius: 10px;
`;
interface PercentProps {
  progress: number;
}
const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: ${color.primary};
  border-radius: 10px;
`;
const Leaf = styled(Icon)`
  width: 20px;
  height: 20px;
`;
const LeafContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-100%);
`;
const TargetSpan = styled.span`
  position: absolute;
  right: 0;
  transform: translateY(100%);
  font-weight: 400;
  font-size: 12px;
  bottom: -4px;
  color: ${color.line01};
`;

export default Progress;
