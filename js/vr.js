            const createNewScene = function (canvasId, filename) {
                const theCanvas = document.getElementById(canvasId); // Get the canvas element
                const theEngine = new BABYLON.Engine(theCanvas, true); // Generate the BABYLON 3D engine
                var theScene = new BABYLON.Scene(theEngine);
                
                var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), theScene);

                camera.attachControl(theCanvas, true);
                camera.inputs.attached.mousewheel.detachControl(theCanvas);

                var dome = new BABYLON.PhotoDome(
                    "testdome",
                    filename,
                    {
                        resolution: 32,
                        size: 1000
                    },
                    theScene
                );    
                // return theScene;
                theEngine.runRenderLoop(function () {
                    theScene.render();
                });
            };

            createNewScene('renderCanvas0', '../2nd_floor.jpg'); //Call the createScene function
            createNewScene('renderCanvas1', '../361.jpg'); //Call the createScene function
            