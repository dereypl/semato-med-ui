import elo from "./icons/calendar_add.svg"
// TODO: add index to each item of array!

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
            icon: elo,
        },
        {
            option: "Lista placówek",
            route: '/departments',
            icon: elo,
        },
    ],
    Patient: [
        {
            option: "Moje dane",
            route: '/profile',
            icon: elo,
        },
        {
            option: "Historia wizyt",
            route: '/visit',
            icon: elo,
        },
        {
            option: "Zmiana hasła",
            route: '/test',
            icon: elo,
        },
    ],
    System: [
        {
            option: "Powiadomienia",
            route: '/notifications',
            icon: elo,
        },
        {
            option: "Zgłoś problem",
            route: '/visit',
            icon: elo,
        },
        {
            option: "Wyloguj",
            route: '/login',
            icon: elo,
        },


    ]
};


export default MENU_ITEMS;