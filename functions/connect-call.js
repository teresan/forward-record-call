exports.handler = function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    //Inicia grabación si recipiente presionó 1
    if (event.Digits === '1') twiml.record({playBeep: true, transcribe: true});
    
    callback(null, twiml);
}