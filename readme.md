SPT - UI Dev Task
-----------------
![SPT Labs](/assets/logo_SPT.png)

### About

This file documents an exercise meant to test a UI developer candidate for a position on the CloudSense Sales Production Team. 

#### Summary

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

Your choice of technologies / solutions will not factor into any evaluation of your work, and you are free to use anything you like, with the exception of things like jQuery and CSS libraries\*.
We recommend using whatever you're most comfortable with, as it is the quality of your work and not your choice of solution that we will be reviewing.

#### Structure and Layout Overview

The design reference includes a static header and an Orders component.

The header includes the CloudSense logo, a search bar, and an account widget. The account widget includes a dropdown menu with typical options (not featured).

The Orders component is composed of individual Order entries, each of which features a collapsed summary view, and an expanded content view. 

The collapsed view lists data relating to the order, a minimal milestone tracker, and a button link. The minimal milestone tracker displays in-progress, completed, and alert states, as well as on-hover tooltips (not featured). 

The expanded view includes a full-size milestone-tracker, and a formatted table of related suborders. Each suborder entry lists its data and includes a button link.

#### Data

All of the above objects should be rendered as interactive mock-ups using data parsed from the provided backend model using the provided REST API.

When building the milestone viewer(s), keep in mind that the current step is defined as the first non-complete step preceded by a step that includes `status: "Complete"` in the provided data. In the absence of such a step, the first step is considered the current step.

#### Notes

Should you have any questions regarding the requirements, feel free to contact us via email, although some aspects are purposely left up to you. If you would like to do a little more to show us something you particularly excel at, consider also doing some of the following:

- Implement the aforementioned UI elements that aren't featured in the design reference
- Implement pagination for the Order component
- Address basic responsive considerations

Please note that doing any or all of the above does not automatically give you an advantage over someone who just completes the stated requirements well.

### Submitting Your Project

When you have completed your project, please email it to us along with any relevant notes or instructions that you feel are necessary.
