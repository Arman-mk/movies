import React from 'react';
import {useAppDispatch} from '@store/hooks/use-app-dispatch';
import {toggleNavbar} from '@store/app/app.slice';
import MenuIcon from '@shared/components/icons/MenuIcon';

const AppHeader = () => {
    const dispatch = useAppDispatch();

    const onClickBurger = () => {
        dispatch(toggleNavbar())
    }

    return (
        <div className='w-full fixed flex z-[10] justify-between'>
            <MenuIcon className='mt-2 ml-4 cursor-pointer block lg:hidden' onClick={onClickBurger}/>
        </div>
    );
};

export default AppHeader