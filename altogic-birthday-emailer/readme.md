[📺 VIDEO][video]

---

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

## Query The Database

1. Click on `Database` and drag `Create Object Iterator` onto the canvas
2. Connect the `trigger` from the `Start` node to the `inputObject` of the `Create Object Iterator` node
3. Select `users` for the `Retrieved object model`
4. Enter the following query for the `Select query`

```
DATETOSTRING(this.birthday,"%m/%d") == DATETOSTRING(NOW(),"%m/%d")
```

## Iterate Over Users

1. Click on `Database` and drag `Iterate to Next Object` onto the canvas
2. Connect the `iterator` from the `Create Object Iterator` node to the `iterator` of the `Iterate to Next Object` node
3. Connect the `iterator` from the `Create Object Iterator` node to the `trigger` of the `Iterate to Next Object` node

## Create Emails

1. Click on `Email` and drag `Create Email Message` onto the canvas
2. Connect `found` from the `Iterate to Next Object` node to the `input` of the `Create Email Message` node
3. Enter `birthday-emailer@gmail.com` for the `From email`
4. Enter `Birthday Emailer` for the `From name`
5. Enter `input.email` for `To`
6. Enter `CONCAT("Happy Birthday, ", input.name)` for the `Subject`
7. Enter the following text for the `Text message`

```
Happy Birthday!

We wish you well in your next year.

Regards,
Birthday Emailer
```

## Send Emails

1. Click on `Email` and drag `Send Email Message` onto the canvas
2. Connect the `emailMessage` from the `Create Email Message` node to the `emailMessage` of the `Send Email Message` node
3. Connect `success` from the `Send Email Message` node to the `trigger` of the `Iterate to Next Object` node

## Finish

1. Click on `Response` and drag `Finish Successfully` onto the canvas
2. Connect `notFound` from the `Iterate to Next Object` node to the `trigger` of the `Finish Successfully` node

![task-service][task-service]

# Create Task

1. Navigate to your [tasks](https://designer.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/snaps/63939b17fc196d5d5833602c/tasks)
2. Click `New` and select `Task`
3. Enter `checker` for the `Task name`
4. Select `Every day at` and leave the time as `00:00 UTC`
5. Select `emailer` for the `Routed service`
6. Click `Create`

![task][task]

# Test The Application

1. Navigate to the [Development](https://tester.altogic.com/users/63939a921bfc9782cc125f5b/apps/63939b17fc196d5d5833602b/envs/63939b17fc196d5d5833603a/tests) environment. Click on the `cloud` in the top right, then click on `Tester`
2. Click on the `Tasks` tab
3. Click on the `checker` task
4. Click `Run task`
5. Observe the output

![tester][tester]

[video]: https://www.youtube.com/watch?v=0xP6diaoaZU
[users-model]: images/users-model.png
[users]: images/users.png
[task-service]: images/task-service.png
[task]: images/task.png
[tester]: images/tester.png
