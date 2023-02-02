import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
      // TODO: llegar al backend

      // TODO BIEN
      if( calendarEvent._id){
        // Actualizado
        dispatch( onUpdateEvent({...calendarEvent}) );
      } else {
        
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime() }) );
      }

    }

    const startDeletingEvent = () => {
      // TODO: LLegar al backed

      dispatch( onDeleteEvent() );
    }

    return {

      //* Propiedades
      activeEvent,
      events,
      hasEventSelected: !!activeEvent,

      //* Métodos
      startDeletingEvent,
      setActiveEvent,
      startSavingEvent,
    

    
  }
}
