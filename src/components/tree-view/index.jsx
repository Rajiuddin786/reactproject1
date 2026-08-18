import './styles.css'
import MenuList from './menu-list';

export default function TreeView({menus=[]}){
    return(
        <div className='treeViewContainer'>
            <MenuList list={menus}/>
        </div>
    );
}