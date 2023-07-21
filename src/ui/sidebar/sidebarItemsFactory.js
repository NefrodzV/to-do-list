import inboxPNG from '../../asset/icon-inbox.png';
import upcomingPNG from '../../asset/icon-upcoming.png';
import todayPNG from '../../asset/icon-today.png';
import addPGN from '../../asset/icon-add.png';
import inboxFactory from '../main/inboxFactory';
import addProjectFormFactory from '../layer/addProjectFormFactory';
import sidebarItemFactory from './sidebarItemFactory';


export default function sidebarItemsFactory() {

    const sidebarItems = [
        sidebarItemFactory(inboxPNG, 'inbox', inboxFactory(), true),
        sidebarItemFactory(upcomingPNG, 'upcoming'),
        sidebarItemFactory(todayPNG, 'today'),
        sidebarItemFactory(addPGN, 'create', addProjectFormFactory()),
    ];

    return sidebarItems;
}

