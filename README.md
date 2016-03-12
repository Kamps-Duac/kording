# kording
Use simple controls to display a musical scale.

# getting started
 - fork the repo
 - run `npm install`
 - run `bower install`
 - resolve any error/dependency issues
 - `grunt serve` to preview the app
 - refer to the `yo angular` [documentation](https://github.com/yeoman/generator-angular) for more info!

# Backlog

Here we will list tasks to be completed. Tasks can be edited and added at will, and claimed by anyone to be achieved.
When you start working on a task, make a note on the README. To complete the task, submit a pull request with the commits
to complete the task. After a task is completed, the task description should be modified to concisely summarize the feature,
framework, or utility.

Any usability issues, feature requests, or bugs should be handled as issues.

- [X] __Determine Framework__ _Scott_ - Going with Angular
- [X] __Scaffold__ - create the Yeoman Scaffold using yeoman-angular with grunt, Saas, and bootstrap
- [X] __Couple of Images__ - download a couple of major scale images as mocks and show them on the page
- [X] __Use VexFlow__ -  to render scales.
  - [ ] Create service that provides the scale URL
  - [X] Create a directive that places the 'current scale' into a DOM element
  - [X] Write the logic to handle a root note and mode, chooses the notes, then pases to vexflow.
  - [X] How can we handle major/minor key signatures?
  - [X] Need the canvas size to change based on scale requirements
- [X] __Nav Controlller__ to pull out Navagation into Index
- [ ] __Create UI Controller__ - create a basic button toolbar to switch between the scale images
- [ ] __turn scale images into HTTP Service__ - Load the scales over HTTP so we can share with the world
- [ ] __Music Theory__ - add info about scale types, finding agreeable modes, circle of fifths, etc

# Todo
 - Separate out the Picker into it's own controller, that controlls the scale via service.
 - [X] How should the scale picker be displayed? - for now as a modal dialog
 - [ ] Need to fix the scales that throw exception in Vexflow - this is an issue with the key signature logic.
 - [ ] Change the scale renderer from checking page size and rendereing to making a reasonable size scale, converting to image, then applying responsive size to the image.

## Example

I found a cool site that somewhat achieves what we want to achive.
http://www.scalerator.com/
