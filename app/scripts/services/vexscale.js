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

        // Public API here
        return function(canvas) {
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);

            var ctx = renderer.getContext();
            var stave = new Vex.Flow.Stave(10, 0, 500);
            stave.addClef('treble').setContext(ctx).draw();

            // Create the notes
            var notes = [
                // A quarter-note C.
                new Vex.Flow.StaveNote({ keys: ['c/4'], duration: 'q' }),

                // A quarter-note D.
                new Vex.Flow.StaveNote({ keys: ['d/4'], duration: 'q' }),

                // A quarter-note rest. Note that the key (b/4) specifies the vertical
                // position of the rest.
                new Vex.Flow.StaveNote({ keys: ['b/4'], duration: 'qr' }),

                // A C-Major chord.
                new Vex.Flow.StaveNote({ keys: ['c/4', 'e/4', 'g/4'], duration: 'q' })
            ];

            // Create a voice in 4/4
            var voice = new Vex.Flow.Voice({
                num_beats: 4,
                beat_value: 4,
                resolution: Vex.Flow.RESOLUTION
            });

            // Add notes to voice
            voice.addTickables(notes);

            // Format and justify the notes to 500 pixels
            new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 500);

            // Render voice
            voice.draw(ctx, stave);
        };
    });
