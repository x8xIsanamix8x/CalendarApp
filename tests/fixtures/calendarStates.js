
export const events = [
    {
        id: '1',
        start: new Date('2023-06-27 13:00:00'),
        end: new Date('2023-06-27 15:00:00'),
        title: 'Cumpleaños de Jose',
        notes: 'Alguna nota',
    },
    {
        id: '2',
        start: new Date('2023-06-28 13:00:00'),
        end: new Date('2023-06-28 15:00:00'),
        title: 'Cumpleaños de Andres',
        notes: 'Alguna nota de Andres',
    },
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null 
}

export const calendarWithEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null 
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] } 
}