
# User Profile Application

This is a user profile application that allows users to view and edit their profile, as well as view events and messages.

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) or **yarn**

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Alesxander1102/user-profile
   cd user-profile
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

```
├── components
│   ├── ui
│   │   ├── EventForm.tsx
│   │   ├── EventList.tsx
│   │   ├── EventModal.tsx
│   │   ├── MessageList.tsx
│   │   ├── MessageModal.tsx
│   │   ├── ProfileDetails.tsx
│   │   ├── ProfileForm.tsx
├── hooks
│   ├── useEvents.ts
│   ├── useMessages.ts
│   ├── useProfile.ts
├── mocks
│   ├── dataUser.json
│   ├── eventsData.json
│   ├── messagesData.json
├── pages
│   ├── index.tsx
│   ├── _app.tsx
├── public
│   ├── images
├── styles
│   ├── globals.css
├── types
│   ├── interfaces.ts
├── util
│   ├── validate.ts
├── README.md
├── package.json
├── tsconfig.json
```

## Additional Features

1. **Data Persistence with `localStorage`**: 
   - User profile modifications are saved in `localStorage` to ensure data persistence across sessions.
   
2. **Unread Message Highlighting**: 
   - Unread messages are highlighted in light gray to differentiate them from viewed messages.

These features enhance the user experience by providing data persistence and visual cues for unread messages.

## Contact

If you have any questions or suggestions, please contact [die2002alexsander@gmail.com](mailto:die2002alexsander@gmail.com).

