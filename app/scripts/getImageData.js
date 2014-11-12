var getImageData = function() {
  var imageData = {};
  $.ajax({
    url: 'https://polar-chamber-4218.herokuapp.com/amazon/sign_key',
    type: 'GET',
    data: {
      file_name: 'url.jpg'
    },
  })
  .done(function(results){
    imageData.uploadPolicy = results.policy;
    imageData.uploadSignature = results.signature;
    imageData.accessKey = results.access_key;
    imageData.acl = results.acl;
    imageData.key = results.key;
    imageData.sas = results.sas;
  });
  return imageData;
};