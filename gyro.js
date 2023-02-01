let gyro = new Gyroscope({frequency: 60});
class ScratchGyro {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "scratchgyro",
            "name": "Gyroscope",
            "blocks": [
                        {
                            "opcode": "gyrosupport",
                            "blockType": "reporter",
                            "text": "gyro supported?",
                            "arguments": {}
                        },
                        {
                            "opcode": "getgyrox",
                            "blockType": "reporter",
                            "text": "gyro x",
                            "arguments": {}
                        },
                        {
                            "opcode": "getgyroy",
                            "blockType": "reporter",
                            "text": "gyro y",
                            "arguments": {}
                        },
                                        {
                            "opcode": "getgyroz",
                            "blockType": "reporter",
                            "text": "gyro z",
                            "arguments": {}
                        },
                ],
        };
    }
    
    gyrosupport({}) {
        let gyro = new Gyroscope({frequency: 60});
        return gyro;
    };
    
    getgyrox({}) {
        let gyro = new Gyroscope({frequency: 60});
        return gyro.x;
    };
    
    getgyroy({}) {
        let gyro = new Gyroscope({frequency: 60});
        return gyro.y;
    };

    getgyroz({}){
        let gyro = new Gyroscope({frequency: 60});
        return gyro.z;
    };
}

Scratch.extensions.register(new ScratchGryo())
