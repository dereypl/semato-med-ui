import elo from "./icons/calendar.svg"

const MENU_ITEMS = {
    Visits: [
        {
            option: "Zaplanowane wizyty",
            route: '/dashboard',
            icon: elo,
        },
        {
            option: "Umów wizytę",
            route: '/visit',
        },
        {
            option: "Lista placówek",
            route: '/departments',
        },
    ],
    Patient: [
        {
            option: "Moje dane",
            route: '/profile'
        },
        {
            option: "Historia wizyt",
            route: '/visit',
        },
        {
            option: "Zmiana hasła",
            route: '/test'
        },
    ],
    System: [
        {
            option: "Powiadomienia",
            route: '/notifications'
        },
        {
            option: "Zgłoś problem",
            route: '/visit',
        },
        {
            option: "Wyloguj",
            route: '/login'
        },


    ]
};


export default MENU_ITEMS;