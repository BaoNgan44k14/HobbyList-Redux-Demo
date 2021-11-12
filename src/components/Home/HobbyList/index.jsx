import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: 0,
    onHobbyClick: null,
}

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick} = props;
    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
            console.log("change color")
        }
    }
    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li 
                    key={hobby.id}
                    //Khi click vào từng hobby thì sẽ thêm class active vào thể li đó
                    className={hobby.id == activeId ? 'active' : ''}
                    // Truyền tham số để biết khi nào đc click vì vậy sẽ dùng arrow func
                    onClick={() => handleClick(hobby)}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;