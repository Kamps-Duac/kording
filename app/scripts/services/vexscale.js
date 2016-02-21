'use strict';

/**
 * @ngdoc service
 * @name kordingApp.vexScale
 * @description
 * # vexScale
 * Factory in the kordingApp.
 */
angular.module('kordingApp')
    .factory('vexScale', function() {
        // Service logic
        var DURATION = 'q';
        // Public API here
        return function(canvas, notes) {
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);

            var ctx = renderer.getContext();
            // Clear the canvas context in case it is being drawn over
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var stave = new Vex.Flow.Stave(10, 0, 500);
            stave.setContext(ctx);
            stave.addClef('treble');
            stave.addKeySignature(notes[0].toUpperCase());
            stave.draw();

            // Create the notes
            var staveNotes = [];

            for (var i = 0; i < notes.length; i++) {
              // TODO: Make the octave suffix smarter
              staveNotes.push(new Vex.Flow.StaveNote({keys: [notes[i]+'/4'], duration: DURATION }));
            }

            // Create a voice in 4/4
            var voice = new Vex.Flow.Voice({
                num_beats: notes.length,
                beat_value: 4,
                resolution: Vex.Flow.RESOLUTION
            });

            // Add notes to voice
            voice.addTickables(staveNotes);

            // Format and justify the notes to 500 pixels
            new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 500);

            // Render voice
            voice.draw(ctx, stave);
        };
    });
