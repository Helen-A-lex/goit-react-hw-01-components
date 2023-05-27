import PropTypes from 'prop-types';
import { Section, StatList, Title, Item } from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
<Section>
  {title && <Title>{title}</Title>}

  <StatList>
    {stats.map(item => (<Item key={item.id} style={{ backgroundColor: getRandomHexColor() }} >
    <span className="label">{item.label} </span>
    <span className="percentage">{item.percentage} %</span>
        </Item>
        ))}
  </StatList>
</Section>
  );
};
Statistics.propTypes= {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
    })).isRequired,  
}