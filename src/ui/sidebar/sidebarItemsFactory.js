import inboxPNG from '../../asset/icon-inbox.png';
import upcomingPNG from '../../asset/icon-upcoming.png';
import todayPNG from '../../asset/icon-today.png';
import addPGN from '../../asset/icon-add.png';
import inboxFactory from '../main/inboxFactory';
import sidebarItemFactory from './sidebarItemFactory';
import projectFormFactory from '../main/projectFormFactory';

export default function sidebarItemsFactory() {

    const sidebarItems = [
        sidebarItemFactory(inboxPNG, 'inbox', inboxFactory(), true),
        sidebarItemFactory(upcomingPNG, 'upcoming'),
        sidebarItemFactory(todayPNG, 'today'),
        sidebarItemFactory(addPGN, 'new project', projectFormFactory()),
    ];

    return sidebarItems;
}

