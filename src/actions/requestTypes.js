export const GET_SPECIALITY_LIST = {
    path: 'visit/speciality/list/get',
    itemType: 'specialityList',
};

export const GET_CLINIC_LIST = {
    path: 'visit/clinic/list/by/speciality/get',
    itemType: 'clinicList',
};

export const GET_PHYSICIAN_LIST = {
    path: 'visit/physician/list/by/speciality/and/clinic/get',
    itemType: 'physicianList',
};

export const GET_AVAILABLE_VISITS_LIST = {
    path: 'visit/available/list/get',
    itemType: 'availableVisitList',
};


export const GET_VISITS_LIST = {
    path: 'patient/visit/list/get',
    itemType: 'visitList',
};

export const GET_NOTIFICATIONS_LIST = {
    path: 'mgmt/notification/get',
    itemType: 'notificationList',
};


export const REQUEST_PROBLEM = {
    path: 'patient/feedback/send',
};


export const CANCEL_VISIT = {
    path: 'visit/cancel',
    itemType: 'visitList',
};

export const MAKE_RESERVATION = {
    path: 'visit/book',
    itemType: 'bookVisit',
};

export const CHANGE_PASSWORD = {
    path: 'user/changePassword',
    itemType: 'changePassword',
};



