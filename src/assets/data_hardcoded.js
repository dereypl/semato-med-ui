import add_visit from "./icons/calendar_add.svg"
import notification_icon from "./icons/notification_icon.svg"
import logout_icon from "./icons/logout_icon.svg"
import pasword_change_icon from "./icons/pasword_change_icon.svg"
import person_info_icon from "./icons/person_info_icon.svg"
import problem_request_icon from "./icons/problem_request_icon.svg"
import visit_history_icon from "./icons/visit_history_icon.svg"
import calendar_icon from "./icons/calendar_top.svg"
import gps_icon from "./icons/gps_icon.svg"
// TODO: add index to each item of array!

const MENU_ITEMS = {
    Visits: [
        {
            option: "Zaplanowane wizyty",
            route: '/dashboard',
            icon: calendar_icon,
        },
        {
            option: "Umów wizytę",
            route: '/visit',
            icon: add_visit,
        },
        {
            option: "Lista placówek",
            route: '/departments',
            icon: gps_icon,
        },
    ],
    Patient: [
        {
            option: "Moje dane",
            route: '/profile',
            icon: person_info_icon,
        },
        {
            option: "Historia wizyt",
            route: '/visit',
            icon: visit_history_icon,
        },
        {
            option: "Zmiana hasła",
            route: '/password',
            icon: pasword_change_icon,
        },
    ],
    System: [
        {
            option: "Powiadomienia",
            route: '/notifications',
            icon: notification_icon,
        },
        {
            option: "Zgłoś problem",
            route: '/request',
            icon: problem_request_icon,
        },
        {
            option: "Wyloguj",
            route: '/logout',
            icon: logout_icon,
        },


    ]
};


export default MENU_ITEMS;