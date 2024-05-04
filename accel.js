class ScratchAccel {
    constructor(runtime) {
        this.runtime = runtime;
        this.accelerometer = null;
    }
    
    getInfo() {
        return {
            "id": "scratchaccel",
            "name": "Accelerometer",
            "blocks": [
                {
                    "opcode": "accelsupport",
                    "blockType": "reporter",
                    "text": "accelerometer supported?",
                    "arguments": {}
                },
                {
                    "opcode": "getaccelx",
                    "blockType": "reporter",
                    "text": "acceleration x",
                    "arguments": {}
                },
                {
                    "opcode": "getaccely",
                    "blockType": "reporter",
                    "text": "acceleration y",
                    "arguments": {}
                },
                {
                    "opcode": "getaccelz",
                    "blockType": "reporter",
                    "text": "acceleration z",
                    "arguments": {}
                },
                {
                    "opcode": "checkSensorAccess",
                    "blockType": "reporter",
                    "text": "sensor access available?",
                    "arguments": {}
                },
                {
                    "opcode": "requestSensorAccess",
                    "blockType": "command",
                    "text": "request sensor access",
                    "arguments": {}
                }
            ],
        };
    }
    
    accelsupport() {
        return 'Accelerometer' in window;
    }
    
    checkSensorAccess() {
        return this.accelerometer !== null;
    }
    
    requestSensorAccess() {
        if (!('Accelerometer' in window)) {
            return; // Accelerometer not supported
        }
        
        if (!this.accelerometer) {
            this.accelerometer = new Accelerometer({ frequency: 60 });
        }
    }
    
    getaccelx() {
        if (!this.accelerometer) {
            return null;
        }
        return this.accelerometer.x;
    }
    
    getaccely() {
        if (!this.accelerometer) {
            return null;
        }
        return this.accelerometer.y;
    }
    
    getaccelz() {
        if (!this.accelerometer) {
            return null;
        }
        return this.accelerometer.z;
    }
}

Scratch.extensions.register(new ScratchAccel());
