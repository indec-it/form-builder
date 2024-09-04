import {ComponentType} from 'react';

import SectionHeader from '../SectionHeader';

interface Props {
  components: {
    SectionHeader: ComponentType<any>;
  };
}

function Header({components, ...props}: Props) {
  return components.SectionHeader ? <components.SectionHeader {...props} /> : <SectionHeader {...props} />;
}

export default Header;
