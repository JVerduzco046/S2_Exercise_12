"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Juan Verduzco
   Date:  02.19.019

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

//set the date displayed in the calendar
var thisDay = new Date();
//Write the calendar to the element with the id of "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
//Create function to generate the calendar table
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += calDays(calDate);
      calendarHTML += "</table>";
      return calendarHTML;
}
//Function to write the calendar caption
function calCaption(calDate) {
      //monthName array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      //////////Determine Current month//////////
      var thisMonth = calDate.getMonth();
      //////////Determine the current year//////////
      var thisYear = calDate.getFullYear();
      ////////// Write the caption //////////
      return "<caption>" + monthName[thisMonth] + " " +
            thisYear + "</caption>";
}
////////// function to write table row of weekday abbrev. //////////
function calWeekdayRow() {
      ////////// array of weekday abbrev. //////////
      var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var rowHTMl = "<tr>";
      ////////// Look through the dayName Array //////////
      for (var i = 0; i < dayName.length; i++) {
            rowHTMl += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
      }
      rowHTMl += "</tr>";
      return rowHTMl;
}

////////// Function ti calculate the days in the month //////////
function daysInMonth(calDate) {
      ////////// Array of days in each month //////////
      var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      ////////// Extract 4 digit year and month value //////////
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();
      ////////// Revise the days in Feb for leap year
      if (thisYear % 4 === 0) {
            if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
                  dayCount[1] = 29;
            }
      }
      //////////return days of the current month //////////
      return dayCount[thisMonth];
}
//////////function to write each day of the month  //////////
function calDays(calDate) {
      ////////// determine starting day of the month  //////////
      var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
      var weekDay = day.getDay();
      //////////write blank cells preceding the starting day  //////////
      var htmlCode = "<tr>";
      var highLightDay = calDate.getDate();
      for (var i = 0; i < weekDay; i++) {
            htmlCode += "<td></td>";
      }
      //////////write cells for weach day of the month  //////////
      var totalDays = daysInMonth(calDate);
      for (var i = 1; i <= totalDays; i++) {
            day.setDate(i);
            weekDay = day.getDay();
            ////////// if statements  //////////
            if (weekDay === 0) {
                  htmlCode += "<tr>";
            }

            if (i === highLightDay) {
                  htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>"
            } else {
                  htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
            }

            if (weekDay === 6) {
                  htmlCode += "</tr>"
            }
      }
      return htmlCode;
}