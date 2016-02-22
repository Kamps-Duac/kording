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

        var findRelativeKeySig = function(accSpec) {
            var keySpecTable = Vex.Flow.keySignature.keySpecs;
            for (var k in keySpecTable) {
              var key = keySpecTable[k];
              if (key.acc === accSpec.acc && key.num === accSpec.num) {
                return k;
              }
            }

            throw new Vex.RERR('BadArguments', 'Failed to find a KeySpec with the same number and type of accidentals.');
        };

        // Public API here
        return function(canvas, scale) {
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);

            var ctx = renderer.getContext();
            // Clear the canvas context in case it is being drawn over
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var stave = new Vex.Flow.Stave(10, 0, 500);
            stave.setContext(ctx);
            stave.addClef('treble');
            stave.addKeySignature(findRelativeKeySig(scale.accSpec));
            stave.draw();

            // Create the notes
            var staveNotes = [];

            for (var i = 0; i < scale.notes.length; i++) {
                // TODO: Make the octave suffix smarter
                staveNotes.push(new Vex.Flow.StaveNote({ keys: [scale.notes[i]], duration: DURATION }));
            }

            // Create a voice in 4/4
            var voice = new Vex.Flow.Voice({
                num_beats: scale.notes.length,
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
