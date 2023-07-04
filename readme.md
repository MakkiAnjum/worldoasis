# The World Oasis

The World Oasis is a comprehensive web application designed for hotel employees to streamline various tasks and manage hotel operations efficiently. The application leverages modern web technologies such as React Router, Styled Components, React Query, Context API, React Hook Form, React icons, React hot toast, Recharts, date-fns, and Supabase to deliver a powerful and user-friendly experience.

## Previews

![Website Screenshot](https://worldoasis.vercel.app/app.png)

## Features

- **Secure User Authentication**: Only hotel employees can create an account and log into the application, ensuring that only authorized personnel can access its features.
- **User Profile Management**: Users can upload an avatar and update their name and password within the application.
- **Cabin Overview**: The application provides a table view with essential information about each cabin, including the cabin photo, name, capacity, price, and current discount.
- **Cabin Management**: Users have the ability to update or delete existing cabins and create new ones, including the option to upload cabin photos.
- **Booking Management**: The application offers a table view displaying all bookings, showing arrival and departure dates, booking status, paid amount, and related cabin and guest data.
- **Booking Status Filtering**: Bookings can be filtered by important status, such as "unconfirmed," "checked in," or "checked out," allowing users to quickly access relevant information.
- **Booking Details**: Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast has been booked, along with the breakfast price.
- **Booking Operations**: Users can delete bookings and perform check-in or check-out operations as guests arrive, without the ability to edit booking details.
- **Payment Confirmation**: Upon check-in, users must acknowledge and confirm payment received outside the app to maintain accurate records.
- **Breakfast Add-On**: Guests have the option to add breakfast for the entire stay during check-in, if not already booked.
- **Guest Information**: Guest data consists of their full name, email, national ID, nationality, and a country flag for easy identification.
- **Dashboard**: The initial app screen is a dashboard providing important information for the last 7, 30, or 90 days, including a list of guests checking in and out on the current day.
- **Sales and Occupancy Statistics**: The dashboard displays statistics on recent bookings, sales, check-ins, and occupancy rate.
- **Sales Charts**: Sales charts showcase daily hotel sales, including "total" sales and "extras" sales (currently limited to breakfast), as well as stay duration statistics.
- **Application Settings**: Users can define application-wide settings, such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.
- **Dark Mode**: The application offers a dark mode for enhanced user experience.

## Technologies Used

- React Router: A routing library for React applications, enabling navigation between different views.
- Styled Components: A CSS-in-JS library for styling React components, providing a flexible and maintainable approach.
- React Query: A powerful data-fetching library for managing API data and state in React applications.
- Context API: A state management solution provided by React for sharing data throughout the application.
- React Hook Form: A library for building performant and straightforward forms in React.
- React icons: A library of popular icons for React applications.
- React hot toast: A toast notification library for React applications, offering customizable and responsive notifications.
- Recharts: A composable charting library for React, enabling the creation of interactive and visually appealing charts.
- date-fns: A popular library for manipulating and formatting dates in JavaScript.
- Supabase: An open-source alternative to Firebase, providing a scalable and flexible backend infrastructure.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository

: `git clone https://github.com/makkianjum/worldoasis.git`. 2. Navigate to the project directory: `cd your-repo`. 3. Install the dependencies: `npm install` or `yarn install`. 4. Configure the necessary environment variables for Supabase or any other required APIs. 5. Start the development server: `npm run dev` or `yarn dev`. 6. Open your browser and visit `http://localhost:5173` to access the application.
