class ScratchGyro {
    let gyro = new Gyroscope({frequency: 60});
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
        return gyro;
    };
    
    getgyrox({}) {
        return gyro.x;
    };
    
    getgyroy({}) {
        return gyro.y;
    };

    getgyroz({}){
        return gyro.z;
    };
}

Scratch.extensions.register(new ScratchGryo())
