'use strict';

/**
 * @ngdoc service
 * @name kordingApp.vexScale
 * @description
 * # vexScale
 * Factory in the kordingApp that returns a Canvas Data URL after VexFlow draws
 * the requested scale onto the canvas. 
 */
angular.module('kordingApp')
    .factory('vexScale', function() {
        // Service logic
        var DURATION = 'q';

        // var findRelativeKeySig = function(accSpec) {
        //     var keySpecTable = Vex.Flow.keySignature.keySpecs;
        //     for (var k in keySpecTable) {
        //         var key = keySpecTable[k];
        //         if (key.acc === accSpec.acc && key.num === accSpec.num) {
        //             return k;
        //         }
        //     }
        //     throw new Vex.RERR('BadArguments', 'Failed to find a KeySpec with the same number and type of accidentals.');
        // };

        var createStaveNotesFromScale = function(scale) {
            var staveNotes = [];
            for (var i = 0; i < scale.notes.length; i++) {
                var note = scale.notes[i];
                note = note.replace(/x/i, '##');
                var accidental = note.split('/')[0].slice(1);
                // TODO: Make the octave suffix smarter
                var staveNote = new Vex.Flow.StaveNote({ keys: [note], duration: DURATION });
                if (accidental) {
                    staveNote.addAccidental(0, new Vex.Flow.Accidental(accidental));
                }
                staveNotes.push(staveNote);
            }
            return staveNotes;
        };

        // Public API here
        return function(scale) {
            var canvas = document.createElement('canvas');
            canvas.height = 100;
            canvas.width = 700;

            var staveWidth = canvas.width - 50;
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);

            var ctx = renderer.getContext();
            // Clear the canvas context in case it is being drawn over
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var stave = new Vex.Flow.Stave(10, 0, staveWidth);
            stave.setContext(ctx);
            stave.addClef('treble');
            //stave.addKeySignature(findRelativeKeySig(scale.accSpec));
            stave.setEndBarType(Vex.Flow.Barline.type.SINGLE);


            // Create the notes
            var staveNotes = createStaveNotesFromScale(scale);


            // Create a voice in 4/4
            var voice = new Vex.Flow.Voice({
                num_beats: scale.notes.length,
                beat_value: 4,
                resolution: Vex.Flow.RESOLUTION
            });

            // Add notes to voice
            voice.addTickables(staveNotes);

            // Format and justify the notes to staveWidth pixels
            var formatter = new Vex.Flow.Formatter();
            formatter.joinVoices([voice]);
            formatter.format([voice], staveWidth);
            formatter.formatToStave([voice], stave);

            // Render stave
            stave.draw();

            // Render voice
            voice.draw(ctx, stave);

            return canvas.toDataURL();
        };
    });
