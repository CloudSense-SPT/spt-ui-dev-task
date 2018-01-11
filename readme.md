SPT - UI Dev Task
-----------------
![SPT Labs](/assets/logo_SPT.png)

### About

This file documents an exercise meant to test a UI developer candidate for a position on the CloudSense Sales Production Team. 

#### The Task

The task is to create a functional mock-up of the following design using any combination\* of frontend technologies in order to fetch and render data from the provided server.

![Design reference](/assets/design_reference_preview.jpg)

### Instructions

#### Setup
1. Make sure you have [git](https://git-scm.com/downloads) installed and configured
1. Make sure that you have [node.js](https://nodejs.org/en/) installed
1. Fork, clone, or download this repository
1. Navigate to the cloned folder in your CLI of choice (terminal, cmd, etc.)
1. Run `npm install` in the repository's root folder - this will install the required dependencies
1. Run `npm start`. This will start the local server. Repeat this step every time you start working on the project
1. Open [http://localhost:3000](http://localhost:3000) to validate that everything is set up

The above will set up a local server with an in-memory data model that can be accessed using the following REST API.

#### REST API reference
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

### Requirements

Build an app (preferably single page) that will load data from the server and render it as per the [design reference](/assets/design_reference.jpg). The mock-up should replicate the visuals of the design reference as closely as possible, and feature any functionality that you may be able to infer from it.

Your choice of technologies / solutions will not factor into any evaluation of your work, and you are free to use anything you like except jQuery\*. We recommend using whatever you're most comfortable with, as it is the quality of you work and not your choice of solution that we will be reviewing.

#### Structure and Layout Overview

The design reference includes a static header and an Orders component.

The header includes the CloudSense logo, a search bar, and an account widget. The account widget includes a dropdown menu with typical options (not featured).

The Orders component is composed of individual Order entries, each of which features a collapsed summary view, and an expanded content view. 

The collapsed view lists data relating to the order, a minimal milestone tracker, and a button link. The minimal milestone tracker includes on-hover tooltips (not featured). 

The expanded view includes a full-size milestone-tracker, and a formatted table of related suborders. Each suborder entry lists its data and includes a button link.

#### Data

All of the above objects should be rendered as interactive mock-ups using data parsed from the provided backend model using the provided REST API.

When building the milestone viewer(s), keep in mind that the current step is only determined as being preceded by a step that includes `status == "Completed"` in the provided data, meaning 

#### Notes

If you have any questions regarding the requirements, feel free to contact us via email, although some aspects are purposely left up to you. As such feel free to develop any additional functionality you deem relevant.  

Any additional features you chose to develop should either expand the presented functionality within the assumed scope, or facilitate functionality that might typically be found in a similar context, whether on the frontend or backend.

Keep in mind that while we encourage creativity and developing additional features, you should focus on completing the base requirements first, and then showing us where you excel. Try not to stray too far outside of the proposed scope though.

#### Deliverable
When you have completed your project, please email it to us along with any relevant notes or instructions that you might have.






 
#### Bonus (not mandatory)
You can do one (or many) of the following to get bonus points:
* Introduce error preview for processes with steps in error (must modify mock data)
* Introduce navigation to order detail (with component) displaying that order specific data
* Introduce persistence on backend (instead of in-memory DB introduce remote database)
* Order paging (on frontend, maybe even on backend)
* Maybe something you thing it would be nice

If you do not do anything from given list, you can still win over someone who has done all of aformentioned.

#### On Order component


When building cell and milestone version of process component follow these rules:
* Displaying entities are process steps ordered by sequence.
* Process is in step after last one with `status == "Completed"`
  + If there is no such step, first one is current
    + Except when all steps are completed 

