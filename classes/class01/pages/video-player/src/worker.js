
import "https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js"
import "https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js"
import "https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js"
import Service from "./service.js"

// no processo principal é window
// no Worker é self

/*
npm install @tensorflow-models/face-landmarks-detection
npm install @tensorflow/tfjs
*/

debugger
const {tf, faceLandmarksDetection } = self

tf.setBackeng('webgl')

const service = new Service({
    faceLandmarksDetection,
    tf
})

onmessage = ({ data }) => {
    console.log('worker!', data)
    postMessage({
        'ok':'ok'
    })
}
