import { calendarSlice, onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithEventState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice', () => {

    test('Debe de regresar el estado por defecto', () => {
        
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );

    });

    test('onSetActiveEvent debe de activar el evento', () => {
        
        const state = calendarSlice.reducer( calendarWithEventState, onSetActiveEvent( events[0] ) );
        expect(state.activeEvent).toEqual( events[0]);

    });

    test('onAddNewEvent debe de agregar el evento', () => {
        
        const newEvent = {
                id: '3',
                start: new Date('2020-10-21 13:00:00'),
                end: new Date('2020-10-21 15:00:00'),
                title: 'Cumpleaños de Jose !!!',
                notes: 'Un dia a la vez'      
        };

        const state = calendarSlice.reducer( calendarWithEventState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual([ ...events, newEvent ]);

    });

    test('onUpdateEvent debe de actualizar el evento', () => {
        
        const updateEvent = {
                id: '1',
                start: new Date('2020-10-21 13:00:00'),
                end: new Date('2020-10-21 15:00:00'),
                title: 'Cumpleaños de Jose actualizado',
                notes: 'Dos dia a la vez'      
        };

        const state = calendarSlice.reducer( calendarWithEventState, onUpdateEvent( updateEvent ) );
        expect( state.events ).toContain( updateEvent );

    });

    


});