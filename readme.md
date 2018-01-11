SPT - UI Dev Task
-----------------
![SPT Labs](/assets/logo_SPT.png)

### About

This file documents an exercise meant to test a UI developer candidate for a position on the CloudSense Sales Production Team. 

### The Task

The task is to create a functional mock-up of the following design using any combination\* of frontend technologies that you may prefer along using the data fetched from server.

![Design reference](/assets/design_reference_preview.jpg)

The mock-up should replicate the visuals of the design reference as closely as possible, and feature any functionality that you may be able to infer from it. Any additional functionality is generally welcome, although we recommend not going too far outside of the scope of what's there.

Your choice of technologies / solutions will not factor into any evaluation of your work, and you are free to use anything you like, except jQuery\*. We recommend using whatever you're most comfortable with, as the quality of your solution will be under scrutiny.

#### Structure and Layout

The design reference includes a static header and a formatted list of Orders.

The header includes the CloudSense logo, a search bar, and an account widget. The account widget includes a dropdown menu with typical options (not featured).

The Orders list is composed of individual Order entries, each of which features a collapsed summary view, and an expanded content view. 

The collapsed view lists data relating to the order, a minimal milestone tracker, and a button link. The expanded view includes a full-size milestone-tracker, and a formatted table of related suborders. Each suborder entry features its data and a button link.

All of the data fields for the above objects can be accesses via the provided backend model.

### Instructions

#### Installation steps
1. Make sure you have [git](https://git-scm.com/downloads) installed and configured
1. Fork this repository (you may clone it locally and put it somewhere accessible)
1. Make sure that you have [node.js](https://nodejs.org/en/) installed
1. In terminal (cmd) go to the cloned folder
1. Run `npm install` - will install required dependencies
1. Run `npm start` - will start server
1. In browser open [http://localhost:3000](http://localhost:3000) - to validate that everything is set up

#### Goal
Build a page (preferably single page app) which will load order data from server and render them as in [design reference](/assets/design_reference.jpg).
Everything beside orders component can be simple mock.

You are free to choose any frontend technology you find fit or know.

If you find something ambiguous or partially defined (might be on purpose) do not hesitate to ask via e-mail. 

##### On Order component
Order table is sort of tree table previewing all user orders, providing information on containing products and order's business process. Your task is to extract mapping information from data and build component in given form.
Make sure that:
* You follow formats of date/number values as defined in design document.

When building cell and milestone version of process component follow these rules:
* Displaying entities are process steps ordered by sequence.
* Process is in step after last one with `status == "Completed"`
  + If there is no such step, first one is current
    + Except when all steps are completed

##### REST API reference
```GET /order/all```
Gives you all orders.

```GET /order/:id```
Gives you data for order with specific id.

```DELETE /order/:id```
Deletes order with given id.

```POST /order```
Creates/updates order from json from request body.

```PUT /order```
Creates/updates order from json from request body.

#### Deliverable
When you are done, please send us:
* Code as a public git repo (preferred) or zipped without `node_modules` folder.
* Short description on how to run it
  * Preferably change readme.md with your instructions

##### Bonus (not mandatory)
You can do one (or many) of the following to get bonus points:
* Introduce error preview for processes with steps in error (must modify mock data)
* Introduce navigation to order detail (with component) displaying that order specific data
* Introduce persistence on backend (instead of in-memory DB introduce remote database)
* Order paging (on frontend, maybe even on backend)
* Maybe something you thing it would be nice

If you do not do anything from given list, you can still win over someone who has done all of aformentioned.