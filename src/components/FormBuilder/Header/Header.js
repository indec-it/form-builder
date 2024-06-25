import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader';

function Header({components, ...props}) {
  return components.SectionHeader ? <components.SectionHeader {...props} /> : <SectionHeader {...props} />;
}

Header.propTypes = {
  components: PropTypes.shape({
    SectionHeader: PropTypes.node
  })
};

Header.defaultProps = {
  components: {}
};

export default Header;
