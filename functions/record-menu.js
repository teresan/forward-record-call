exports.handler = function(context, event, callback) {
  console.log(event);
  const twiml = new Twilio.twiml.VoiceResponse();
  const gather = twiml.gather({
      action: `/connect-call`,
      numDigits: 1,
      timeout: 5,
  });
  gather.say({language: 'es-ES'}, 'Presione 1 para grabar esta llamada o espere en línea para conectarse directamente');
  callback(null, twiml);
}