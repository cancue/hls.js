/**
 *  hex dump helper class
 */

const Hex = {
  hexDump: function (array: Uint8Array) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
      let h = array[i].toString(16);
      if (h.length < 2) {
        h = '0' + h;
      }

      str += h;
    }
    return str;
  },
  decode: function (str: string): Uint8Array {
    const hex = str.match(/.{1,2}/g);
    if (!hex) return new Uint8Array();
    return Uint8Array.from(hex.map((byte) => parseInt(byte, 16)));
  },
};

export default Hex;
