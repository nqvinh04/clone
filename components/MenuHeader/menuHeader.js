import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/category.actions';
import './menuHeader.css';


const MenuHeader = (props) =>  {

    const category = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {  
        console.log('vao day roi nha')
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {
                        category.parentId ? 
                        <a href={category.slug}>{category.name}</a> : 
                        <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (
                        <ul>{renderCategories(category.children)}</ul>
                    ) : null}
                </li>
            );
        }

        return myCategories;
    };


    return (
        <div className='menuHeader'>
            <ul>
                {category.categories.length > 0 ? renderCategories(category.categories) : null}
            </ul>
        </div>
    )
}

export default MenuHeader;