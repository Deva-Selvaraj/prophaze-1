module.exports = {
  login: (req, res) => {
    result = changeToAscii(req.body.Payload);
    resultText = convertAsciiToText(result);
    finalResult=decodeBase64(resultText);
    return res.status(200).json({
      message: "Successfull",
      data: req.body.Payload,
      data2: result,
      data3: resultText,
      data4:finalResult
    });
  },
};

function changeToAscii(payload) {
  const regex = /0x/g;
  const regex2 = /\s/g;
  var hex = payload.replace(regex, "").replace(regex2, "");
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str.split(" ");
}

function convertAsciiToText(listData) {
  str = "";
  for (let i of listData) {
    const characters = String.fromCharCode(i);
    str += characters;
  }
  return str;
}

function decodeBase64(encodedValue) {
  var b = Buffer.from(encodedValue, "base64");
  var s = b.toString();
  return s;
}
