const CALLED_PARTY = '+447491497411';

exports.handler = function(context, event, callback) {
  const response = new Twilio.twiml.VoiceResponse();
  const dial = response.dial({answerOnBridge: true});
  dial.number({
    url: `/record-menu`
  } , CALLED_PARTY);
  callback(null, response);
}
