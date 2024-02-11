import { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateSelect = (selected) => {
    // Create a modal instead of a prompt
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selected.view.calendar
    calendarApi.unselect() // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m='20px'>
      <Header title='Calendar' subtitle='Your Schedule' />
    </Box>
  )
}
export default Calendar
