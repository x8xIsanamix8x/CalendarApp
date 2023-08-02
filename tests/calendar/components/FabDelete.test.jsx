import { fireEvent, render, screen } from "@testing-library/react";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";

jest.mock('../../../src/hooks/useCalendarStore');


describe('Pruebas en <FabDelete />', () => { 

    const mockstartDeletingEvent = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el componente correctamente', () => {
        
        useCalendarStore.mockReturnValue({
            hasEventSelected: false
        })

        render( <FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
        expect( btn.classList).toContain('btn-danger');
        expect( btn.classList).toContain('fab-danger');
        expect( btn.style.display).toBe('none');


    });

    test('Debe de mostrar el boton si hay un evento activo', () => {
        
        useCalendarStore.mockReturnValue({
            hasEventSelected: true
        })

        render( <FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
    
        expect( btn.style.display).toBe('');


    });

    test('Debe de llamar startDeletingEvent si hay un evento activo', () => {
        
        useCalendarStore.mockReturnValue({
            hasEventSelected: true,
            startDeletingEvent: mockstartDeletingEvent

        })

        render( <FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
        fireEvent.click( btn );

        expect( mockstartDeletingEvent ).toHaveBeenCalled();

    });

})