import { onOpenDateModal, onCloseDateModal, uiSlice } from "../../../src/store/ui/uiSlice";


describe('Pruebas en uiSlice', () => {

    test('Debe de regresar el estado por defecto', () => {
        
        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false })
        // Si en caso de que vaya a ver nuevas propiedades se podria hacer de la siguiente manera:
        // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();

    });

    test('Debe de cambiar el isDateModalOpen correctamente', () => {
        
        let state = uiSlice.getInitialState();
        state = uiSlice.reducer( state, onOpenDateModal() )
        expect(state.isDateModalOpen).toBeTruthy();

        state = uiSlice.reducer( state, onCloseDateModal() );
        expect(state.isDateModalOpen).toBeFalsy();

    });


});