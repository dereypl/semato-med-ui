import add_visit from "./icons/calendar_add.svg"
import logout_icon from "./icons/logout_icon.svg"
import pasword_change_icon from "./icons/pasword_change_icon.svg"
import person_info_icon from "./icons/person_info_icon.svg"
import problem_request_icon from "./icons/problem_request_icon.svg"
import visit_history_icon from "./icons/visit_history_icon.svg"
import notification_icon from "./icons/notification_icon.svg"
import gps_icon from "./icons/gps_icon.svg"
import visits_icon from "./icons/visits_icon.svg"

//--- ACTIVE ICONS ---

import calendar_icon_date_active from "./icons/menu_active/calendar_icon_date_active.svg"
import notification_icon_active from "./icons/menu_active/notification_icon_active.svg"
import pasword_change_icon_active from "./icons/menu_active/pasword_change_icon_active.svg"
import person_info_icon_active from "./icons/menu_active/person_info_icon_active.svg"
import problem_request_icon_active from "./icons/menu_active/problem_request_icon_active.svg"
import visit_history_icon_active from "./icons/menu_active/visit_history_icon_active.svg"
import add_visit_icon_active from "./icons/menu_active/add_visit_icon_active.svg"

//--- PATH ICONS ---
import calendar_top from "./icons/calendar_top.svg"
import calendar_add_visit_icon from "./icons/calendar_add_visit_icon.svg"



// TODO: add index to each item of array!

const MENU_ITEMS = {
    Visits: [
        {
            option: "Zaplanowane wizyty",
            route: '/dashboard',
            icon: visits_icon,
            icon_active: calendar_icon_date_active,
            pathIcon: calendar_top,
        },
        {
            option: "Umów wizytę",
            route: '/visit',
            icon: add_visit,
            icon_active: add_visit_icon_active,
            pathIcon: calendar_add_visit_icon,

        },
        {
            //TODO: change icon_active
            option: "Lista placówek",
            route: '/departments',
            icon: gps_icon,
            icon_active: gps_icon,
        },
    ],
    Patient: [
        {
            option: "Moje dane",
            route: '/profile',
            icon: person_info_icon,
            icon_active: person_info_icon_active,
        },
        {
            option: "Historia wizyt",
            route: '/history',
            icon: visit_history_icon,
            icon_active: visit_history_icon_active,
        },
        {
            option: "Zmiana hasła",
            route: '/password',
            icon: pasword_change_icon,
            icon_active: pasword_change_icon_active,
        },
    ],
    System: [
        {
            option: "Powiadomienia",
            route: '/notifications',
            icon: notification_icon,
            icon_active: notification_icon_active,
        },
        {
            option: "Zgłoś problem",
            route: '/request',
            icon: problem_request_icon,
            icon_active: problem_request_icon_active,
        },
        // {
        //     option: "Wyloguj",
        //     route: '/logout',
        //     icon: logout_icon,
        // },
    ]
};


export default MENU_ITEMS;