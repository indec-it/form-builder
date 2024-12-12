import SectionHeader from '../SectionHeader';

function Header({components = {}, ...props}) {
  return components.SectionHeader ? <components.SectionHeader {...props} /> : <SectionHeader {...props} />;
}

export default Header;
