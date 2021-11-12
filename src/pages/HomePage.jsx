import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from './../actions/hobby';


HomePage.propTypes = {
    
};

// Hàm random có 4 chữ số số bất kì
const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}


function HomePage(props) {
    const newId = randomNumber();
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    const handleAddHobbyClick = () => {
        // Random hobby object: id + title
        const newHobby = {
            id: newId,
            title: `Milen ${newId}`,
        }

        // Gửi đi 1 action để thêm mới 1 hobby vào redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };
    return (
        <div>
            <h1>REDUX HOOKS</h1>
            <button onClick={handleAddHobbyClick}>Click</button>
            <HobbyList 
            hobbyList={hobbyList} 
            activeId={activeId}
            onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;
