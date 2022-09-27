            // const canvas = document.createElement("canvas");            
            const canvas = document.getElementById("renderCanvas0"); // Get the canvas element
            const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

            const canvas1 = document.getElementById("renderCanvas1"); // Get the canvas element
            const engine1 = new BABYLON.Engine(canvas1, true); // Generate the BABYLON 3D engine

            // const canvas2 = document.getElementById("renderCanvas2"); // Get the canvas element
            // const engine2 = new BABYLON.Engine(canvas2, true); // Generate the BABYLON 3D engine

            // const canvas3 = document.getElementById("renderCanvas3"); // Get the canvas element
            // const engine3 = new BABYLON.Engine(canvas3, true); // Generate the BABYLON 3D engine
            
            // engine.inputElement = document.getElementById("renderCanvas0");

            const createScene = function (filename, theEngine) {
                var theScene = new BABYLON.Scene(theEngine);

                var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), theScene);

                camera.attachControl(canvas, true);
                camera.inputs.attached.mousewheel.detachControl(canvas);

                var dome = new BABYLON.PhotoDome(
                    "testdome",
                    filename,
                    {
                        resolution: 32,
                        size: 1000
                    },
                    theScene
                );

                // theScene.createDefaultEnvironment();
    
                return theScene;
            };

            const scene = createScene('../360photo.jpg', engine); //Call the createScene function
            const scene1 = createScene('../361.jpg', engine1); //Call the createScene function
            // const scene2 = createScene('./360photo.jpg', engine2); //Call the createScene function
            // const scene3 = createScene('./360photo.jpg', engine3); //Call the createScene function

            // Register a render loop to repeatedly render the scene
            engine.runRenderLoop(function () {
                scene.render();
                scene1.render();
                // scene2.render();
                // scene3.render();
                // if (scene.activeCamera) {
                //     scene.render();
                // }
            });
