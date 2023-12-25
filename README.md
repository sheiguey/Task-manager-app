# Install and run the application locally.

1. Ensure you have Node.js installed.
2. Create a free Mongo Atlas database online or start a local MongoDB database.
3. Create a server/.env file with a MONGO_URL property set to your MongoDB connection string.
4. In the terminal, run: npm install to install frontend dependencies and backend dependenies.
5. In the terminal, run: npm run deploy this will build the frontend as a static file in the server folder and launch the server.
6. Browse to the task manager frontend at localhost:8000 and perform your CRUD operations.


# Docker

1. Ensure you have Docker installed.
2. Run docker build -t todolist-app
3. Run docker run -it -p 8000:8000 todolist-app

        or

run directly my image by running : docker run -it -p 8000:8000 docker237/my-todolist-app
# Deploy the application on GCP

# Navigate and use application.

The mouseOver on any task item displays the update and delete icons.

Click on a item item will displays the task details.

Click on the update icon to navigate to the update form to perform the update of the task.

Click on the delete icon to delete the task.

Click on add button at the botton of the taskslist to navigate to the createtask form.

