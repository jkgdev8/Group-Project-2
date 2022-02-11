document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: 'auto',
    // stickyHeaderDates: false, // for disabling

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listMonth,listYear'
    },

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {
      listMonth: { buttonText: 'list month' },
      listYear: { buttonText: 'list year' }
    },

    initialView: 'listMonth',
    initialDate: '2022-01-01',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    events: [
      {
        title: 'WIP',
        daysOfWeek: [ 1, 2, 3 ],
        duration: '00:30'
      }
    ]
  });

  calendar.render();
});