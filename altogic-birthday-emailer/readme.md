# App Creation

1. Navigate to your [dashboard](https://designer.altogic.com/users/63939a921bfc9782cc125f5b/apps)
2. Click on `New app`
3. Enter `birthday-emailer` for your `App name`
4. Enter `birthday-emailer` for your`Subdomain`
5. Select `US East (South Carolina)` for your `Execution environment location`
6. Select `Free` for your `Execution environment pricing plan`
7. Select the `Basic` template

# Update Users Model

1. Navigate to the [app](https://designer.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/snaps/63939b17fc196d5d5833602c/home)
2. Click on `Models`
3. Click on the `users` model
4. Click on `New field` and select the `Date-time` type
5. Enter `birthday` for the `Field name`
6. Check `Indexed`
7. Click `Create`

![users-model][users-model]

# Add Users

1. Navigate to the [Development](https://navigator.altogic.com/apps/63939b17fc196d5d5833602b/envs/63939b17fc196d5d5833603a/database) environment. Click on the `cloud` in the top right, then click on `Navigator`
2. Click `New` and enter an `email`, `name`, and `birthday`
3. Repeat for more users

![users][users]

# Create Task Service

1. Navigate to your [services](https://designer.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/snaps/63939b17fc196d5d5833602c/services)
2. Click `New` and select `Task service`
3. Enter `emailer` for the `Service name`
4. Click `Create`
5. // TODO

![task-service][task-service]

# Test Task Service

1. Navigate to the [Development](https://tester.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/envs/63939b17fc196d5d5833603a/tests) environment. Click on the `cloud` in the top right, then click on `Tester`
2. Click on the `Tasks` tab
3. Click on the `checker` task
4. Click `Run task`
5. Observe the output

![tester][tester]

# Create Task

1. Navigate to your [tasks](https://designer.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/snaps/63939b17fc196d5d5833602c/tasks)
2. Click `New` and select `Task`
3. Enter `checker` for the `Task name`
4. Select `Every day at` and leave the time as `00:00 UTC`
5. Select `emailer` for the `Routed service`
6. Click `Create`

![task][task]

[users-model]: images/users-model.png
[users]: images/users.png
[task-service]: images/task-service.png
[task]: images/task.png
[tester]: images/tester.png
