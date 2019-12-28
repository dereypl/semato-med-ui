export const GET_SPECIALITY_LIST = {
    path: 'visit/speciality/list/get',
    itemType: 'specialityList',
    where: {},
};

export const GET_CLINIC_LIST = {
    path: 'visit/clinic/list/by/speciality/get',
    itemType: 'clinicList',
    where: {},
    params: {
        specialityId : 5,
        clinicId : 1
    },
};


export const GET_VISITS_LIST = {
    path: 'patient/visit/list/get',
    itemType: 'visitList',
    where: {},
};


