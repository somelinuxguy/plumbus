// A very basic lambda

const serialize = function(object) {
    return JSON.stringify(object, null, 2)
  }

exports.handler = async function(event, context) {
    console.log('ENVIRONMENT VARIABLES: ' + serialize(process.env));
    console.log('CONTEXT: ' + serialize(context));
    console.log('EVENT: ' + serialize(event));
    return "Strange women lying in ponds, distributing swords, is no basis for a system of government!"
}
