import PropTypes from 'prop-types';

/**
 * Used to show/hide other components
 */
const Show = ({
  visible,
  isMount,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {(!isMount || visible) && children}
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  isMount: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Show;
