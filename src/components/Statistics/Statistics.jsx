import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor.js';
import {
  StatisticsName,
  Title,
  StatList,
  ItemStat,
  StatLabel,
  StatPercentage,
} from './statistics.styled.js';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsName>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <ItemStat key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </ItemStat>
        ))}
      </StatList>
    </StatisticsName>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
