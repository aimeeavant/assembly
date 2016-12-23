import React from 'react';

class Navigation extends React.Component {
  render() {
    const { props } = this;

    function listNestedMembers(items, level) {
      level = level || 0;
      if (!items || items.length === 0) return null;
      return items.map((member) => {
        let linkContainerClasses;
        let linkClasses = 'txt-link mr12 mr0-mm inline-block block-mm txt-s';
        if (level !== 0) {
          linkClasses += ` ml${6 * level}-mm`;
        }
        if (member.name === props.navData.active) {
          linkClasses += ' is-active';
        }
        if (level === 0) {
          linkClasses += ' txt-bold';
          linkContainerClasses = 'block';
        } else {
          linkContainerClasses = 'inline-block block-mm ';
        }
        const nestedItems = listNestedMembers(member.items, level + 1);
        return (
          <div key={member.name} className={linkContainerClasses}>
            <a
              className={linkClasses}
              href={member.route}
            >
              {member.name}
            </a>
            {nestedItems}
          </div>
        );
      });
    }

    const navEls = props.navData.items.map((r) => {
      const showNestedItems = r.name !== props.navData.active
        || r.items === undefined
        || r.items.length === 0;
      const nestedItems = (showNestedItems) ? null : (
        <div className='pl6 txt-s mb3'>
          {listNestedMembers(r.items)}
        </div>
      );
      return (
        <div key={r.name}>
          <a className={`txt-s txt-bold block txt-link mb3 ${r.name === props.navData.active ? 'is-active' : ''}`} href={`/assembly${r.route}`}>{r.name}</a>
          {nestedItems}
        </div>
      );
    });

    return (<div>
      <div className='mb12 txt-l'>Assembly</div>
      {navEls}
    </div>);
  }
}

Navigation.propTypes = {
  navData: React.PropTypes.shape({
    items: React.PropTypes.array.isRequired,
    active: React.PropTypes.string
  }).isRequired
};

export { Navigation };
