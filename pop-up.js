class ScratchLocalStorage {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "popup",
            "name": "Pop-Up",
            "blocks": [
                        {
                            "opcode": "popupwait",
                            "blockType": "reporter",
                            "text": "open pop-up at url [url] and wait until it's closed with name [name]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://google.com/"
                                },
                                "name": {
                                    "type": "string",
                                    "defaultValue": "Google"
                                },
                            }
                        },
                        {
                            "opcode": "popup",
                            "blockType": "reporter",
                            "text": "open pop-up at url [url] with name [name]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://google.com/"
                                },
                                "name": {
                                    "type": "string",
                                    "defaultValue": "Google"
                                },
                            }
                        },
                ],
        };
    }
    
    popupwait({url, name}) {
        var winObj = window.open(url,name,'width=800,height=600,status=0,toolbar=0');
        while(!winObj.closed) {}
        return "";
    };
    
    popup({url, name}) {
        var winObj = window.open(url,name,'width=800,height=600,status=0,toolbar=0');
        return "";
    };
}

Scratch.extensions.register(new ScratchLocalStorage())
